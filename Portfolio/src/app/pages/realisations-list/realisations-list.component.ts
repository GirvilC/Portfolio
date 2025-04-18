import { Component, Pipe, PipeTransform } from '@angular/core';
import { REALISATIONS } from '../../data/realisation';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Pipe({ name: 'safeSliceHtml'})
export class SafeSliceHtmlPipe implements PipeTransform{
  transform(value: string, limit: number = 100): string {
    if(!value) return '';

    const text = value.replace(/<[^>]+>/g, '');

    const sliced = text.slice(0, limit);

    return sliced + (text.length > limit ? '...' : '');
  }
}

@Component({
  selector: 'app-realisations-list',
  standalone: true,
  imports: [RouterLink, CommonModule, MatIconModule, MatButtonModule, SafeSliceHtmlPipe],
  templateUrl: './realisations-list.component.html',
  styleUrl: './realisations-list.component.scss'
})
export class RealisationsListComponent {
  realisations = REALISATIONS;
}