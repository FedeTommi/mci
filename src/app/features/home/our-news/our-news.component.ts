import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  imports:         [
    MatButton,
    MatIcon,
    RouterLink,
  ],
  selector:        'mci-our-news',
  templateUrl:     'our-news.component.html',
  styleUrl:        'our-news.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurNewsComponent {
}
