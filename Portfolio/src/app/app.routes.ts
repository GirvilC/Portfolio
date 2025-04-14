import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'competence/:id', loadComponent: () => import('./pages/competence-details/competence-details.component').then(m => m.CompetenceDetailsComponent)},
    { path: 'realisation/:id', loadComponent: () => import('./pages/realisation-details/realisation-details.component').then(m => m.RealisationDetailsComponent)}
];
