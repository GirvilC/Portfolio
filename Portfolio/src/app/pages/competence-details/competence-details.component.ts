import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { COMPETENCES } from '../../data/competence';

@Component({
  selector: 'app-competence-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competence-details.component.html',
  styleUrl: './competence-details.component.scss'
})
export class CompetenceDetailsComponent {
  competence = COMPETENCES[0];

  constructor(private route: ActivatedRoute){
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const found = COMPETENCES.find(c => c.id === id);
      if(found){
        this.competence = found;
      }
    });
  }

  public getTitreCompetence(id: string): string {
    const found = COMPETENCES.find(c => c.id === id);
    return found ? found.titre : id;
  }
}
