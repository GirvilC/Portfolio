import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Realisation, REALISATIONS } from '../../data/realisation';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { COMPETENCES } from '../../data/competence';

@Component({
  selector: 'app-realisation-details',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule],
  templateUrl: './realisation-details.component.html',
  styleUrl: './realisation-details.component.scss'
})
export class RealisationDetailsComponent {
  realisation: Realisation | null = null;
  private sub: Subscription = new Subscription;

  constructor(private route: ActivatedRoute){
    this.sub = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.realisation = REALISATIONS.find(r => r.id === id) || null;
    })
  }

  public getTitreCompetence(id: string): string {
    const found = COMPETENCES.find(c => c.id === id);
    return found ? found.titre : id;
  }
}
