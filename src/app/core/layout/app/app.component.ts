import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../../../features/home/hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { WelcomeComponent } from '../../../features/home/welcome/welcome.component';
import { OurPastorsComponent } from '../../../features/home/our-pastors/our-pastors.component';
import { OurStoryComponent } from '../../../features/home/our-story/our-story.component';
import { OurValuesComponent } from '../../../features/home/our-values/our-values.component';
import { PrayerComponent } from '../../../features/home/prayer/prayer.component';
import { JoinUsOnSundayComponent } from '../../../features/home/join-us-on-sunday/join-us-on-sunday.component';

@Component({
  imports:         [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    WelcomeComponent,
    OurPastorsComponent,
    OurStoryComponent,
    OurValuesComponent,
    PrayerComponent,
    JoinUsOnSundayComponent,
  ],
  selector:        'mci-app',
  templateUrl:     'app.component.html',
  styleUrl:        'app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
