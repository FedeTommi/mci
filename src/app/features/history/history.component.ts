import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { HeroComponent } from '../../shared/hero/hero.component';
import { SectionComponent } from '../../shared/section/section.component';

@Component({
  imports:         [
    HeroComponent,
    SectionComponent
  ],
  selector:        'mci-history',
  templateUrl:     'history.component.html',
  styleUrl:        'history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly routeData = toSignal(this.route.data, { initialValue: this.route.snapshot.data });

  protected readonly isDiocese = computed(() => this.routeData()['isDiocese'] === true);
  protected readonly links = [
    { label: 'La Missione', path: '/home/history/mission' },
    { label: 'La diocesi', path: '/home/history/diocese' }
  ];
}
