import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mci-root',
  imports:  [RouterModule],
  template: '<router-outlet/>',
})
export class RootComponent {
}
