import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  imports:         [
    HeroComponent
  ],
  selector:        'mci-history',
  templateUrl:     'history.component.html',
  styleUrl:        'history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent {
}
