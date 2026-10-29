import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: '',
    loadChildren: () => import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'participante',
    loadChildren: () =>
      import('./pages/participante/participante.routes').then((m) => m.PARTICIPANTE_ROUTES),
  },
  {
    path: 'organizador',
    loadChildren: () =>
      import('./pages/organizador/organizador.routes').then((m) => m.ORGANIZADOR_ROUTES),
  },
  { path: '**', redirectTo: '' },
];
