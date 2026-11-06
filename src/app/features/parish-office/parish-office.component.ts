import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroComponent } from '../../shared/hero/hero.component';
import { SectionComponent } from '../../shared/section/section.component';

@Component({
  imports:         [
    HeroComponent,
    SectionComponent
  ],
  selector:        'mci-parish-office',
  templateUrl:     'parish-office.component.html',
  styleUrl:        'parish-office.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParishOfficeComponent {
}
