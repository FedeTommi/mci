import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  imports:         [
    HeroComponent
  ],
  selector:        'mci-carlo-acutis',
  templateUrl:     'carlo-acutis.component.html',
  styleUrl:        'carlo-acutis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarloAcutisComponent {
}
