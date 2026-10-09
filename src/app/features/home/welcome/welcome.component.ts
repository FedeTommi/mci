import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  imports:         [
    MatButton
  ],
  selector:        'mci-welcome',
  templateUrl:     'welcome.component.html',
  styleUrl:        'welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {
}
