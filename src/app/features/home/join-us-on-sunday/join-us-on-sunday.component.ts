import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from '../../../shared/section/section.component';
import { MatButton } from '@angular/material/button';

@Component({
  imports:         [
    SectionComponent,
    MatButton,
  ],
  selector:        'mci-join-us-on-sunday',
  templateUrl:     'join-us-on-sunday.component.html',
  styleUrl:        'join-us-on-sunday.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JoinUsOnSundayComponent {
}
