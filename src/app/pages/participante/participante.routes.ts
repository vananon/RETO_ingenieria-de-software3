import { Routes } from '@angular/router';
import { ParticipanteLayout } from '../../layouts/participante-layout/participante-layout';

export const PARTICIPANTE_ROUTES: Routes = [
  {
    path: '',
    component: ParticipanteLayout,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'eventos' },
      {
        path: 'eventos',
        loadComponent: () => import('./events/events').then((m) => m.Events),
      },
    ],
  },
];
