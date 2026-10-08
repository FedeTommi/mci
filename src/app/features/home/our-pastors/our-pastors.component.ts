import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from '../../../shared/section/section.component';

@Component({
  imports:         [
    SectionComponent
  ],
  selector:        'mci-our-pastors',
  templateUrl:     'our-pastors.component.html',
  styleUrl:        'our-pastors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurPastorsComponent {
}
