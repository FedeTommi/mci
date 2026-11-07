import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';
import { SectionComponent } from '../../shared/section/section.component';

@Component({
  imports:         [
    HeroComponent,
    SectionComponent
  ],
  selector:        'mci-history',
  templateUrl:     'history.component.html',
  styleUrl:        'history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent {
}
