import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  imports:         [
    MatButton
  ],
  selector:        'mci-card',
  templateUrl:     'card.component.html',
  styleUrl:        'card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  title = input.required<string>();
  text = input.required<string>();
  imgUrl = input.required<string>();
  buttonText = input<string | undefined>(undefined);
}
