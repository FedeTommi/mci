import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from '../../../shared/section/section.component';

@Component({
  imports:         [
    SectionComponent
  ],
  selector:        'mci-our-groups',
  templateUrl:     'our-groups.component.html',
  styleUrl:        'our-groups.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurGroupsComponent {
}
