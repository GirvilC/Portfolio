import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-presentation-detail',
  imports: [CommonModule, MatCardModule],
  templateUrl: './presentation-detail.component.html',
  styleUrl: './presentation-detail.component.scss'
})
export class PresentationDetailComponent {

}
