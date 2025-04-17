import { Component } from '@angular/core';
import { REALISATIONS } from '../../data/realisation';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-realisations-list',
  imports: [RouterLink, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './realisations-list.component.html',
  styleUrl: './realisations-list.component.scss'
})
export class RealisationsListComponent {
  realisations = REALISATIONS;
}
