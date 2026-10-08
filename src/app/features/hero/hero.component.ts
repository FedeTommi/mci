import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [],
  selector:        'mci-hero',
  templateUrl:     'hero.component.html',
  styleUrl:        'hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  private x: NgOptimizedImage | undefined;
}
