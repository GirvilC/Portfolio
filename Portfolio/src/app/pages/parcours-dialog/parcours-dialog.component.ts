import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { COMPETENCES } from '../../data/competence';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parcours-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatDividerModule, RouterLink],
  templateUrl: './parcours-dialog.component.html',
  styleUrl: './parcours-dialog.component.scss'
})
export class ParcoursDialogComponent {
  
  competences = COMPETENCES[0];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ParcoursDialogComponent>){}

  public getTitreCompetence(id: string): string {
      const found = COMPETENCES.find(c => c.id === id);
      return found ? found.titre : id;
  }

  public onCloseDialog(): void {
    this.dialogRef.close();
  } 
}
