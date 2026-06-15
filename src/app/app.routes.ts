import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:          '',
    loadComponent: () => import('./core/layout/app/app.component').then((m) => m.AppComponent),
  }
];
