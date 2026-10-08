import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports:         [
    MatButton,
    NgOptimizedImage,
    RouterLink
  ],
  selector:        'mci-footer',
  templateUrl:     'footer.component.html',
  styleUrl:        'footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
}
