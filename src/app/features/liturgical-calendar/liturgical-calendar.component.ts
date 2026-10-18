import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  imports:         [
    HeroComponent
  ],
  selector:        'mci-liturgical-calendar',
  templateUrl:     'liturgical-calendar.component.html',
  styleUrl:        'liturgical-calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiturgicalCalendarComponent {
}
