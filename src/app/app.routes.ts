import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:          'home',
    loadComponent: () => import('./core/layout/app/app.component').then((m) => m.AppComponent),
    children:      [
      {
        path:          '',
        loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path:          'history',
        loadComponent: () => import('./features/history/history.component').then((m) => m.HistoryComponent),
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
