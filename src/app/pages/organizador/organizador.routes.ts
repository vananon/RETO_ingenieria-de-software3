import { Routes } from '@angular/router';
import { OrganizadorLayout } from '../../layouts/organizador-layout/organizador-layout';

// Las pantallas del organizador (dashboard, my-events, event-form) se agregan aquí
// como hijas del layout cuando se implementen.
export const ORGANIZADOR_ROUTES: Routes = [
  {
    path: '',
    component: OrganizadorLayout,
    children: [],
  },
];
