import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  imports:         [
    CardComponent
  ],
  selector:        'mci-welcome',
  templateUrl:     'welcome.component.html',
  styleUrl:        'welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {
}
