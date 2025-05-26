import { Component, inject, PLATFORM_ID } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ParcoursDialogComponent } from '../parcours-dialog/parcours-dialog.component';

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

  isBrowser: boolean;

  constructor(private dialog: MatDialog){
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  }

  parcours: ParcoursItem[] = [
    {
      type: "pro",
      titre: "Alternance développeur full stack",
      structure: "Capgemini Engineering",
      logo: 'assets/ImageCapgeminiEngineering.png',
      date: "Septembre 2023 - Aujourd'hui",
      lieu: "Toulouse, France",
      responsabilite: "Développement et maintenance de solutions pour Veolia",
      statut: "Alternant",
      missions: [
        "Participer à l'implémentation de processus fonctionnels",
        "Interfaçage avec des solutions tierces via API",
        "Dévelopemment d'applications pour Veolia",
        "Mise en place de bonnes pratiques"
      ],
      technos: [
        "python",
        "angular",
        "sql"
      ],
      projets: [
        "amt",
        "plant"
      ]
    },
    {
      type: "ecole",
      titre: 'Master Ingénierie du Logiciel',
      structure: 'ESIEA',
      logo: 'assets/ImageEsiea.png',
      date: "Septembre 2023 - Aujourd'hui",
      lieu: "Agen, France",
      description: "Fondée en 1958 par Maurice Lafargue, l’ESIEA (École Supérieure d’Informatique, Électronique, Automatique) est une grande école d’ingénieurs spécialisée dans les sciences et technologies du numérique. Implantée sur plusieurs campus en France (Paris/Ivry-sur-Seine, Laval, Agen et Dax), elle forme des ingénieurs généralistes et experts dans des domaines tels que la cybersécurité, l’intelligence artificielle, la data science et les systèmes embarqués. L’ESIEA se distingue par une pédagogie axée sur la pratique, l’innovation et l’engagement sociétal, avec une forte dimension humaine. Elle propose des formations en alternance, des doubles diplômes et des partenariats avec plus de 800 entreprises.​"
    },
    {
      type: "pro",
      titre: 'Stage développeur full stack',
      structure: 'Capgemini Engineering',
      logo: 'assets/ImageCapgeminiEngineering.png',
      date: "Février 2023 - Aout 2023",
      lieu: "Toulouse, France",
      responsabilite: "Développement d'une application de gestion de bons de commande",
      statut: "Stagiaire",
      missions: [
        "Développement d'une application web",
        "Optimisation des performances des requêtes SQL"
      ],
      technos: [
        "angular",
        "javascript",
        "sql"
      ],
      projets: [
        "ads"
      ]
    },
    {
      type: "ecole",
      titre: 'Bachelor en informatique',
      structure: 'ESIEA',
      logo: 'assets/ImageEsiea.png',
      date: "Septembre 2020 - Février 2023",
      lieu: "Agen, France",
      description: "Fondée en 1958 par Maurice Lafargue, l’ESIEA (École Supérieure d’Informatique, Électronique, Automatique) est une grande école d’ingénieurs spécialisée dans les sciences et technologies du numérique. Implantée sur plusieurs campus en France (Paris/Ivry-sur-Seine, Laval, Agen et Dax), elle forme des ingénieurs généralistes et experts dans des domaines tels que la cybersécurité, l’intelligence artificielle, la data science et les systèmes embarqués. L’ESIEA se distingue par une pédagogie axée sur la pratique, l’innovation et l’engagement sociétal, avec une forte dimension humaine. Elle propose des formations en alternance, des doubles diplômes et des partenariats avec plus de 800 entreprises.​",

    },
    {
      type: "ecole",
      titre: 'Baccalauréat STI2D',
      structure: 'Lycée Antoine Bourdelle',
      logo: 'assets/ImageLyceeBourdelle.jpg',
      date: "Septembre 2019 - Juillet 2020",
      lieu: "Montauban, France",
      description: "Lycée général, technologique et professionnel rendant hommage à Émile Antoine Bourdelles, sculpteur et peintre français né à Montauban en 1861. Il est l'un des plus grands lycée de son département avec environ 3000 élèves chaque année."
    }
  ]

  public openDetails(item: any): void {
    this.dialog.open(ParcoursDialogComponent, {
      data: item,
      width: '800px'
    });
  }
}

export interface ParcoursItem {
  type: string;
  titre: string;
  structure: string;
  logo: string;
  date: string;
  lieu: string;
  description?: string;
  responsabilite?: string;
  statut?: string;
  missions?: string[];
  technos?: string[];
  projets?: string[];
}