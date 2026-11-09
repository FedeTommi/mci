import { inject } from '@angular/core';
import { RedirectFunction, Router, Routes } from '@angular/router';

function redirectLegacyPage(path: string): RedirectFunction {
  return ({ queryParams, fragment }) => inject(Router).createUrlTree([path], { queryParams, fragment: fragment ?? undefined });
}

export const routes: Routes = [
  { path: 'home/history', pathMatch: 'full', redirectTo: redirectLegacyPage('/history/mission') },
  { path: 'home/history/mission', pathMatch: 'full', redirectTo: redirectLegacyPage('/history/mission') },
  { path: 'home/history/diocese', pathMatch: 'full', redirectTo: redirectLegacyPage('/history/diocese') },
  { path: 'home/pastors', pathMatch: 'full', redirectTo: redirectLegacyPage('/pastors') },
  { path: 'home/parish-office', pathMatch: 'full', redirectTo: redirectLegacyPage('/parish-office') },
  { path: 'home/gallery', pathMatch: 'full', redirectTo: redirectLegacyPage('/gallery') },
  { path: 'home/contacts', pathMatch: 'full', redirectTo: redirectLegacyPage('/contacts') },
  { path: 'home/liturgical-calendar', pathMatch: 'full', redirectTo: redirectLegacyPage('/liturgical-calendar') },
  { path: 'home/news', pathMatch: 'full', redirectTo: redirectLegacyPage('/news') },
  { path: 'home/carlo-acutis', pathMatch: 'full', redirectTo: redirectLegacyPage('/carlo-acutis') },
  {
    path:          '',
    loadComponent: () => import('./core/layout/app/app.component').then((m) => m.AppComponent),
    children:      [
      { path: '', pathMatch: 'full', redirectTo: '/home' },
      {
        path:          'home',
        loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'history',
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'mission' },
          {
            path: 'mission',
            loadComponent: () => import('./features/history/history.component').then((m) => m.HistoryComponent),
          },
          {
            path: 'diocese',
            loadComponent: () => import('./features/history/history.component').then((m) => m.HistoryComponent),
            data: { isDiocese: true },
          },
        ],
      },
      {
        path:          'pastors',
        loadComponent: () => import('./features/pastors/pastors.component').then((m) => m.PastorsComponent),
      },
      {
        path:          'parish-office',
        loadComponent: () => import('./features/parish-office/parish-office.component').then((m) => m.ParishOfficeComponent),
      },
      {
        path:          'gallery',
        loadComponent: () => import('./features/gallery/gallery.component').then((m) => m.GalleryComponent),
      },
      {
        path:          'contacts',
        loadComponent: () => import('./features/contacts/contacts.component').then((m) => m.ContactsComponent),
      },
      {
        path:          'liturgical-calendar',
        loadComponent: () => import('./features/liturgical-calendar/liturgical-calendar.component').then((m) => m.LiturgicalCalendarComponent),
      },
      {
        path:          'news',
        loadComponent: () => import('./features/news/news.component').then((m) => m.NewsComponent),
      },
      {
        path:          'carlo-acutis',
        loadComponent: () => import('./features/carlo-acutis/carlo-acutis.component').then((m) => m.CarloAcutisComponent),
      },
    ]
  },
  {
    path:       '**',
    redirectTo: '/home',
  }
];
