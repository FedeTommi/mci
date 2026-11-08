import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton, MatIconButton } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

import { ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  imports:         [
    MatButton,
    MatIconButton,
    NgOptimizedImage,
    RouterLink,
    MatIcon,
  ],
  selector:        'mci-header',
  templateUrl:     'header.component.html',
  styleUrl:        'header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private readonly menu = viewChild.required<ElementRef<HTMLElement>>('menu');
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private readonly menuToggle = viewChild.required<MatIconButton, ElementRef<HTMLButtonElement>>('menuToggle', { read: ElementRef });
  private readonly scrollLock = inject(ScrollStrategyOptions).block();
  private animation?: Animation;
  private isClosing = false;
  private swipe?: { id: number; x: number; y: number; isHorizontal: boolean };
  private suppressClick = false;
  private readonly destroyRef = inject(DestroyRef);

  protected readonly navigationLinks = [
    { path: 'home', label: 'Home' },
    { path: 'history/mission', label: 'Storia' },
    { path: 'pastors', label: 'Parroci' },
    { path: 'parish-office', label: 'Ufficio parrocchiale' },
    { path: 'gallery', label: 'Galleria' },
    { path: 'contacts', label: 'Contatti' },
    { path: 'liturgical-calendar', label: 'Calendario liturgico' },
    { path: 'news', label: 'Notizie' },
    { path: 'carlo-acutis', label: 'Carlo Acutis' },
  ];

  protected readonly menuOpen = signal(false);
  protected readonly isCompact = signal(true);

  constructor() {
    inject(Router).events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.closeMenu(false);
      }
    });
    afterNextRender(() => {
      const menu = this.menu().nativeElement;
      const navigation = menu.querySelector<HTMLElement>('nav')!;
      const observer = new ResizeObserver(() => {
        const items = [...menu.querySelectorAll<HTMLElement>('.logo, .navigation a, .social-link')];
        items.forEach((item) => observer.observe(item));
        const requiredWidth = items.reduce((width, item) => width + item.getBoundingClientRect().width, 0)
          + parseFloat(getComputedStyle(navigation).paddingRight);
        const isCompact = requiredWidth > menu.getBoundingClientRect().width;
        this.isCompact.set(isCompact);
        if (!isCompact) {
          this.closeMenu(false);
        }
      });

      observer.observe(menu);
      // Capture before RouterLink can activate a link at the end of a swipe.
      const suppressSwipeClick = (event: MouseEvent) => {
        if (this.suppressClick && event.detail !== 0) {
          event.preventDefault();
          event.stopPropagation();
          this.suppressClick = false;
        }
      };
      const dialog = this.dialog().nativeElement;
      dialog.addEventListener('click', suppressSwipeClick, true);
      const resize = () => this.closeMenu(false);
      window.addEventListener('resize', resize);
      this.destroyRef.onDestroy(() => {
        observer.disconnect();
        window.removeEventListener('resize', resize);
        dialog.removeEventListener('click', suppressSwipeClick, true);
        this.closeMenu(false);
      });
    });
  }

  protected openMenu(): void {
    if (!this.isCompact() || this.menuOpen()) {
      return;
    }
    const dialog = this.dialog().nativeElement;
    const toggleButton = this.menuToggle().nativeElement;
    const toggle = toggleButton.getBoundingClientRect();
    const x = toggle.left + toggle.width / 2;
    const y = toggle.top + toggle.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    dialog.style.setProperty('--reveal-origin', `${x}px ${y}px`);
    dialog.style.setProperty('--reveal-radius', `${radius}px`);
    this.suppressClick = false;
    toggleButton.focus({ preventScroll: true });
    this.scrollLock.enable();
    dialog.showModal();
    this.menuOpen.set(true);
    this.animateMenu(false);
  }

  protected closeMenu(animate = true): void {
    if (!this.dialog().nativeElement.open) {
      return;
    }
    if (animate && this.isClosing) {
      return;
    }
    this.isClosing = true;
    const clipPath = getComputedStyle(this.dialog().nativeElement).clipPath;
    this.animation?.cancel();
    if (animate && this.animateMenu(true, clipPath)) {
      return;
    }
    this.finishClose();
  }

  protected cancelMenu(event: Event): void {
    event.preventDefault();
    this.closeMenu();
  }

  protected menuClosed(): void {
    if (this.dialog().nativeElement.open) {
      return;
    }
    this.animation?.cancel();
    this.animation = undefined;
    this.scrollLock.disable();
    this.menuOpen.set(false);
    this.isClosing = false;
    this.cancelSwipe();
  }

  private finishClose(): void {
    this.dialog().nativeElement.close();
    this.menuClosed();
  }

  private animateMenu(reverse: boolean, currentClipPath?: string): boolean {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    const collapsed = 'circle(0px at var(--reveal-origin))';
    const expanded = 'circle(var(--reveal-radius) at var(--reveal-origin))';
    this.animation = this.dialog().nativeElement.animate(
      [{ clipPath: reverse ? (currentClipPath === 'none' ? expanded : currentClipPath ?? expanded) : collapsed }, { clipPath: reverse ? collapsed : expanded }],
      { duration: 320, easing: 'ease-in-out' },
    );
    this.animation.onfinish = () => {
      this.animation = undefined;
      if (reverse) {
        this.finishClose();
      }
    };
    return true;
  }

  protected startSwipe(event: PointerEvent): void {
    this.suppressClick = false;
    this.swipe = event.pointerType === 'touch' && event.isPrimary
      ? { id: event.pointerId, x: event.clientX, y: event.clientY, isHorizontal: false }
      : undefined;
  }

  protected moveSwipe(event: PointerEvent): void {
    const swipe = this.swipe;
    if (!swipe || swipe.id !== event.pointerId) {
      return;
    }
    const x = event.clientX - swipe.x;
    const y = Math.abs(event.clientY - swipe.y);
    if (!swipe.isHorizontal && (y > 12 || x < -12)) {
      this.cancelSwipe();
    } else if (x > 12 && x > y * 2) {
      swipe.isHorizontal = true;
      this.suppressClick = true;
      this.dialog().nativeElement.setPointerCapture(event.pointerId);
    }
  }

  protected endSwipe(event: PointerEvent): void {
    const swipe = this.swipe;
    if (swipe?.id === event.pointerId && swipe.isHorizontal
      && event.clientX - swipe.x > Math.max(80, innerWidth * 0.15)
      && event.clientX - swipe.x > Math.abs(event.clientY - swipe.y) * 2) {
      this.closeMenu();
    }
    this.cancelSwipe();
  }

  protected cancelSwipe(): void {
    this.swipe = undefined;
  }

  protected dialogClick(event: MouseEvent): void {
    if ((event.target as Element).closest('a')) {
      this.closeMenu(false);
    }
  }
}
