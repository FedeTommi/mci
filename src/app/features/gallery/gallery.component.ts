import { afterNextRender, afterRenderEffect, ChangeDetectionStrategy, Component, computed, DestroyRef, ElementRef, inject, Injector, signal, viewChild } from '@angular/core';

import { MatIcon } from '@angular/material/icon';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';

import { HeroComponent } from '../../shared/hero/hero.component';
import { galleryGroups, GalleryGroup, GalleryPhoto } from './gallery.model';

@Component({
  imports: [HeroComponent, MatIcon],
  selector: 'mci-gallery',
  templateUrl: 'gallery.component.html',
  styleUrl: 'gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
  private readonly loadMore = viewChild<ElementRef<HTMLButtonElement>>('loadMore');
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('viewer');

  private swipe?: { id: number; x: number; y: number };
  protected readonly imageState = signal<'loading' | 'ready' | 'error'>('loading');
  protected readonly failedThumbnails = signal(new Set<string>());
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly injector = inject(Injector);
  private readonly scrollLock = inject(ScrollStrategyOptions).block();
  protected readonly selectedPhoto = signal<GalleryPhoto | undefined>(undefined);

  protected readonly groups = inject(galleryGroups).filter((group) => group.photos.length);
  protected readonly activeGroup = signal(this.groups[0]);
  protected readonly visibleCount = signal(12);
  protected readonly visiblePhotos = computed(() => this.activeGroup()?.photos.slice(0, this.visibleCount()) ?? []);
  protected readonly viewerPosition = computed(() => {
    const group = this.activeGroup();
    const photo = this.selectedPhoto();
    return group && photo ? `${group.label} · Foto ${group.photos.indexOf(photo) + 1} di ${group.photos.length}` : '';
  });

  private readonly sequence = this.groups.flatMap((group) => group.photos.map((photo) => ({ group, photo })));

  constructor() {
    inject(DestroyRef).onDestroy(() => this.scrollLock.disable());
    afterRenderEffect((cleanup) => {
      const target = this.loadMore()?.nativeElement;
      const group = this.activeGroup();
      const count = this.visibleCount();
      if (!target || this.selectedPhoto() || typeof IntersectionObserver === 'undefined') {
        return;
      }
      let isActive = true;
      const observer = new IntersectionObserver((entries) => {
        if (isActive && entries.some((entry) => entry.isIntersecting) && this.activeGroup() === group && this.visibleCount() === count && !this.selectedPhoto()) {
          this.showMore();
        }
      }, { rootMargin: '300px' });
      observer.observe(target);
      cleanup(() => {
        isActive = false;
        observer.disconnect();
      });
    });
  }

  protected openPhoto(photo: GalleryPhoto): void {
    this.imageState.set('loading');
    this.selectedPhoto.set(photo);
    this.scrollLock.enable();
    this.dialog().nativeElement.showModal();
  }

  protected movePhoto(direction: number): void {
    const index = this.sequence.findIndex((entry) => entry.photo === this.selectedPhoto());
    if (index < 0) {
      return;
    }
    const { group, photo } = this.sequence[(index + direction + this.sequence.length) % this.sequence.length];
    const count = this.activeGroup() === group ? this.visibleCount() : 12;
    this.activeGroup.set(group);
    this.visibleCount.set(Math.max(count, Math.ceil((group.photos.indexOf(photo) + 1) / 12) * 12));
    if (this.selectedPhoto() !== photo) {
      this.imageState.set('loading');
    }
    this.selectedPhoto.set(photo);
    this.revealActiveLabel();
  }

  protected viewerKey(event: KeyboardEvent): void {
    if (this.dialog().nativeElement.open && !event.altKey && !event.ctrlKey && !event.metaKey && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
      this.movePhoto(event.key === 'ArrowRight' ? 1 : -1);
    }
  }

  protected closeViewer(): void {
    this.dialog().nativeElement.close();
  }

  protected viewerClosed(): void {
    this.scrollLock.disable();
    const id = this.selectedPhoto()?.id;
    this.selectedPhoto.set(undefined);
    // Traversal may have replaced the invoker with a different group's grid.
    afterNextRender(() => {
      const button = [...this.host.nativeElement.querySelectorAll<HTMLButtonElement>('[data-photo]')].find((item) => item.dataset['photo'] === id);
      button?.focus({ preventScroll: true });
      button?.scrollIntoView?.({ block: 'center', behavior: 'instant' });
      this.revealActiveLabel();
    }, { injector: this.injector });
  }

  private revealActiveLabel(): void {
    const button = [...this.host.nativeElement.querySelectorAll<HTMLButtonElement>('.group-controls button')].find((item) => item.dataset['group'] === this.activeGroup()?.id);
    if (button) {
      const row = button.parentElement!;
      row.scrollLeft = button.offsetLeft - row.clientWidth / 2 + button.offsetWidth / 2;
    }
  }

  protected showMore(): void {
    this.visibleCount.update((count) => Math.min(count + 12, this.activeGroup()?.photos.length ?? 0));
  }

  protected thumbnailFailed(id: string): void {
    this.failedThumbnails.update((failed) => new Set([...failed, id]));
  }

  protected imageSettled(photo: GalleryPhoto, state: 'ready' | 'error'): void {
    if (this.selectedPhoto() === photo) {
      this.imageState.set(state);
    }
  }

  protected startSwipe(event: PointerEvent): void {
    this.swipe = event.pointerType === 'touch' && event.isPrimary
      ? { id: event.pointerId, x: event.clientX, y: event.clientY } : undefined;
  }

  protected endSwipe(event: PointerEvent): void {
    const swipe = this.swipe;
    this.swipe = undefined;
    if (!swipe || swipe.id !== event.pointerId) {
      return;
    }
    const x = event.clientX - swipe.x;
    const y = Math.abs(event.clientY - swipe.y);
    if (Math.abs(x) > 80 && Math.abs(x) > y * 2) {
      this.movePhoto(x < 0 ? 1 : -1);
    }
  }

  protected cancelSwipe(): void {
    this.swipe = undefined;
  }

  protected selectGroup(group: GalleryGroup): void {
    this.activeGroup.set(group);
    this.visibleCount.set(12);
    afterNextRender(() => {
      this.host.nativeElement.querySelector('h2')?.scrollIntoView?.({ block: 'start', behavior: 'instant' });
      this.revealActiveLabel();
    }, { injector: this.injector });
  }
}
