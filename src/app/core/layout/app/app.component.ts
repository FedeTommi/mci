import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../../../features/hero/hero.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
  ],
  selector:        'mci-app',
  templateUrl:     'app.component.html',
  styleUrl:        'app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
