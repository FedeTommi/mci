import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  imports:         [
    HeroComponent
  ],
  selector:        'mci-parish-office',
  templateUrl:     'parish-office.component.html',
  styleUrl:        'parish-office.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParishOfficeComponent {
}
