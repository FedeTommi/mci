import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  imports:         [
    HeroComponent
  ],
  selector:        'mci-gallery',
  templateUrl:     'gallery.component.html',
  styleUrl:        'gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
}
