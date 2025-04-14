import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Realisation, REALISATIONS } from '../../data/realisation';

@Component({
  selector: 'app-realisation-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './realisation-details.component.html',
  styleUrl: './realisation-details.component.scss'
})
export class RealisationDetailsComponent {
  realisation: Realisation | null = null;

  constructor(private route: ActivatedRoute){
    const id = this.route.snapshot.paramMap.get('id');
    this.realisation = REALISATIONS.find(r => r.id === id) || null;
  }
}
