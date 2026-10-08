import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports:         [
    MatButton,
    NgOptimizedImage,
    RouterLink,
    MatIcon,
    MatIconButton
  ],
  selector:        'mci-footer',
  templateUrl:     'footer.component.html',
  styleUrl:        'footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
}
