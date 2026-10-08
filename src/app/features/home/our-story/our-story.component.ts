import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from '../../../shared/section/section.component';
import { MatButton } from '@angular/material/button';

@Component({
  imports:         [
    SectionComponent,
    MatButton
  ],
  selector:        'mci-our-story',
  templateUrl:     'our-story.component.html',
  styleUrl:        'our-story.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurStoryComponent {
}
