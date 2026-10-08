import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  imports:         [],
  selector:        'mci-hero',
  templateUrl:     'hero.component.html',
  styleUrl:        'hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
}
