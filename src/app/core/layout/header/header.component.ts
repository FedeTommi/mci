import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton, MatIconButton } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

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
  private readonly destroyRef = inject(DestroyRef);

  readonly menuOpen = signal(false);
  readonly isCompact = signal(true);

  constructor() {
    afterNextRender(() => {
      const menu = this.menu().nativeElement;
      const navigation = menu.querySelector<HTMLElement>('nav')!;
      const items = [...menu.querySelectorAll<HTMLElement>('.logo, .navigation a, .social-link')];
      const observer = new ResizeObserver(() => {
        const requiredWidth = items.reduce((width, item) => width + item.getBoundingClientRect().width, 0)
          + parseFloat(getComputedStyle(navigation).paddingRight);
        const isCompact = requiredWidth > menu.getBoundingClientRect().width;
        this.isCompact.set(isCompact);
        if (!isCompact) {
          this.menuOpen.set(false);
        }
      });

      observer.observe(menu);
      items.forEach((item) => observer.observe(item));
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  closeMenu(toggle: MatIconButton): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      toggle.focus();
    }
  }
}
