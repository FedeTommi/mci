import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from '../../../shared/section/section.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatPrefix } from '@angular/material/input';

@Component({
  imports: [
    SectionComponent,
    MatButton,
    MatIcon,
    MatPrefix
  ],
  selector:        'mci-our-story',
  templateUrl:     'our-story.component.html',
  styleUrl:        'our-story.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurStoryComponent {
}
