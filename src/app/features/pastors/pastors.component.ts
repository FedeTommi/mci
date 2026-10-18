import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  imports:         [
    HeroComponent
  ],
  selector:        'mci-pastors',
  templateUrl:     'pastors.component.html',
  styleUrl:        'pastors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PastorsComponent {
}
