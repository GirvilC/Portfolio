import { Component } from '@angular/core';
import { COMPETENCES } from '../../data/competence';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-competences-list',
  standalone: true,
  imports: [RouterLink, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './competences-list.component.html',
  styleUrl: './competences-list.component.scss'
})
export class CompetencesListComponent {
  competences = COMPETENCES;
}
