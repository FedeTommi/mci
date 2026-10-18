import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';
import { SectionComponent } from '../../shared/section/section.component';

@Component({
  imports:         [
    HeroComponent,
    SectionComponent,
  ],
  selector:        'mci-carlo-acutis',
  templateUrl:     'carlo-acutis.component.html',
  styleUrl:        'carlo-acutis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarloAcutisComponent {
}
