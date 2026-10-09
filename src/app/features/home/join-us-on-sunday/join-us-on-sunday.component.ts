import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from '../../../shared/section/section.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports:         [
    SectionComponent,
    MatButton,
    MatIcon,
  ],
  selector:        'mci-join-us-on-sunday',
  templateUrl:     'join-us-on-sunday.component.html',
  styleUrl:        'join-us-on-sunday.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JoinUsOnSundayComponent {
}
