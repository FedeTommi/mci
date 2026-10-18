import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  imports:         [],
  selector:        'mci-hero',
  templateUrl:     'hero.component.html',
  styleUrl:        'hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  imageUrl = input.required<string>();
}
