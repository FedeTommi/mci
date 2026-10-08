import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from '../../../shared/section/section.component';

@Component({
  imports:         [
    SectionComponent
  ],
  selector:        'mci-our-values',
  templateUrl:     'our-values.component.html',
  styleUrl:        'our-values.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurValuesComponent {
}
