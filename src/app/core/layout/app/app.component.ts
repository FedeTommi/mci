import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButton, MatIconButton } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports:         [
    RouterOutlet,
    MatButton,
    MatIconButton,
    NgOptimizedImage,
    RouterLink,
    MatIcon,
  ],
  selector:        'mci-app',
  templateUrl:     'app.component.html',
  styleUrl:        'app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
