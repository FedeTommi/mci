import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

import { HeroComponent } from '../../shared/hero/hero.component';
import { SectionComponent } from '../../shared/section/section.component';

@Component({
  imports:         [
    HeroComponent,
    SectionComponent,
    MatExpansionModule,
    MatIcon,
    MatTableModule,
    RouterLink
  ],
  selector:        'mci-parish-office',
  templateUrl:     'parish-office.component.html',
  styleUrl:        'parish-office.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParishOfficeComponent {
  protected readonly displayedColumns = ['day', 'morning', 'afternoon'];
  protected readonly openingHours = [
    { day: 'Lunedì', morning: '8:00–12:00', afternoon: '13:00–17:00' },
    { day: 'Martedì', morning: '8:00–13:00*', afternoon: '—' },
    { day: 'Mercoledì', morning: '8:00–13:00', afternoon: '—' },
    { day: 'Giovedì', morning: '8:00–13:00', afternoon: '—' }
  ];
}
