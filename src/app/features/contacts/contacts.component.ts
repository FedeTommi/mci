import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../shared/hero/hero.component';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  imports:         [
    HeroComponent,
    CardComponent
  ],
  selector:        'mci-contacts',
  templateUrl:     'contacts.component.html',
  styleUrl:        'contacts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {
}
