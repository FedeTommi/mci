import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports:         [RouterLink, RouterLinkActive],
  selector:        'mci-hero',
  templateUrl:     'hero.component.html',
  styleUrl:        'hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  imageUrl = input.required<string>();
  title = input<string>();
  subtitle = input<string>();
  links = input<readonly { label: string; path: string }[]>([]);
}
