import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompetencesListComponent } from './pages/competences-list/competences-list.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'competence/:id', loadComponent: () => import('./pages/competence-details/competence-details.component').then(m => m.CompetenceDetailsComponent)},
    { path: 'realisation/:id', loadComponent: () => import('./pages/realisation-details/realisation-details.component').then(m => m.RealisationDetailsComponent)},
    { path: 'competences', loadComponent: () => import('./pages/competences-list/competences-list.component').then(m => m.CompetencesListComponent)},
    { path: 'realisations', loadComponent: () => import('./pages/realisations-list/realisations-list.component').then(m => m.RealisationsListComponent)},
    { path: 'presentation', loadComponent: () => import('./pages/presentation-detail/presentation-detail.component').then(m => m.PresentationDetailComponent)},
    { path: 'parcours', loadComponent: () => import('./pages/parcours/parcours.component').then(m => m.ParcoursComponent)}
];
