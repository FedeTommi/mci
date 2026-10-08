import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton, MatIconButton } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports:         [
    MatButton,
    MatIconButton,
    NgOptimizedImage,
    RouterLink,
    MatIcon,
  ],
  selector:        'mci-header',
  templateUrl:     'header.component.html',
  styleUrl:        'header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
}
