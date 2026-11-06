import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { JoinUsOnSundayComponent } from './join-us-on-sunday/join-us-on-sunday.component';
import { OurValuesComponent } from './our-values/our-values.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { OurPastorsComponent } from './our-pastors/our-pastors.component';
import { OurGroupsComponent } from './our-groups/our-groups.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { OurNewsComponent } from './our-news/our-news.component';

@Component({
  imports:         [
    WelcomeComponent,
    JoinUsOnSundayComponent,
    OurValuesComponent,
    OurStoryComponent,
    OurPastorsComponent,
    OurGroupsComponent,
    HeroComponent,
    OurNewsComponent
  ],
  selector:        'mci-home',
  templateUrl:     'home.component.html',
  styleUrl:        'home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
