import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from '../../../shared/section/section.component';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  imports:         [
    SectionComponent,
    CardComponent
  ],
  selector:        'mci-our-groups',
  templateUrl:     'our-groups.component.html',
  styleUrl:        'our-groups.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurGroupsComponent {
}
