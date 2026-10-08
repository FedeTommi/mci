import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  imports:         [],
  selector:        'mci-section',
  templateUrl:     'section.component.html',
  styleUrl:        'section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {
  title = input.required<string>();
  subtitle = input<string | undefined>(undefined);
  backgroundColor = input.required<string>();
  textColor = input.required<string>();
}
