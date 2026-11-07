import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroComponent } from '../../shared/hero/hero.component';
import { SectionComponent } from '../../shared/section/section.component';

@Component({
  imports:         [
    HeroComponent,
    SectionComponent
  ],
  selector:        'mci-pastors',
  templateUrl:     'pastors.component.html',
  styleUrl:        'pastors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PastorsComponent {
}
