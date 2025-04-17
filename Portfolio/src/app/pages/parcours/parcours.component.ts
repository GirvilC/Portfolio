import { Component, inject, PLATFORM_ID } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.scss',
  animations: [
    trigger('fadeInStagger', [
      transition(':enter', [
        query('.timeline-item', [
          style({opacity: 0, transform: 'translateY(20px)'}),
          stagger(150, [
            animate('500ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)'})
            ),
          ]),
        ],
        { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ParcoursComponent {

  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  parcours: ParcoursItem[] = [
    {
      titre: "Alternance développeur full stack",
      structure: "Capgemini Engineering",
      logo: 'assets/ImageCapgeminiEngineering.png',
      date: "Septembre 2023 - Aujourd'hui"
    },
    {
      titre: 'Master Ingénierie du Logiciel',
      structure: 'ESIEA',
      logo: 'assets/ImageEsiea.png',
      date: "Septembre 2023 - Aujourd'hui"
    },
    {
      titre: 'Stage développeur full stack',
      structure: 'Capgemini Engineering',
      logo: 'assets/ImageCapgeminiEngineering.png',
      date: "Février 2023 - Aout 2023"
    },
    {
      titre: 'Bachelor en informatique',
      structure: 'ESIEA',
      logo: 'assets/ImageEsiea.png',
      date: "Septembre 2020 - Février 2023"
    },
    {
      titre: 'Baccalauréat STI2D',
      structure: 'Lycée Antoine Bourdelle',
      logo: 'assets/ImageLyceeBourdelle.jpg',
      date: "Septembre 2019 - Juillet 2020"
    }
  ]
}

export interface ParcoursItem {
  titre: string;
  structure: string;
  logo: string;
  date: string;
}