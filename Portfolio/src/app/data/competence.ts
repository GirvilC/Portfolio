export interface Competence {
    id: string;
    titre: string;
    definition: string;
    elementDePreuve: string;
    autocritique: string;
    evolution: string;
    liensVersRealisations: string[],
    liensVersCompetences: string[],
}

export const COMPETENCES: Competence[] = [
    {
        id: 'adaptation',
        titre: 'Adaptation besoin client',
        definition: 'definition',
        elementDePreuve: 'elementDePreuve',
        autocritique: 'autocritique',
        evolution: 'evolution',
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'agile',
        titre: 'Agile',
        definition: 'definition',
        elementDePreuve: 'elementDePreuve',
        autocritique: 'autocritique',
        evolution: 'evolution',
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'angular',
        titre: 'Angular',
        definition: 'definition',
        elementDePreuve: 'elementDePreuve',
        autocritique: 'autocritique',
        evolution: 'evolution',
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'benchmarking',
        titre: 'Banchmarking',
        definition: 'definition',
        elementDePreuve: 'elementDePreuve',
        autocritique: 'autocritique',
        evolution: 'evolution',
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'communication',
        titre: 'Communication',
        definition: 'definition',
        elementDePreuve: 'elementDePreuve',
        autocritique: 'autocritique',
        evolution: 'evolution',
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'gestion',
        titre: 'Gestion de projet',
        definition: 'definition',
        elementDePreuve: 'elementDePreuve',
        autocritique: 'autocritique',
        evolution: 'evolution',
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'javascript',
        titre: 'Javascript',
        definition: 'definition',
        elementDePreuve: 'elementDePreuve',
        autocritique: 'autocritique',
        evolution: 'evolution',
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'nodejs',
        titre: 'NodeJS',
        definition: 'definition',
        elementDePreuve: 'elementDePreuve',
        autocritique: 'autocritique',
        evolution: 'evolution',
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'python',
        titre: 'Python',
        definition: 'definition',
        elementDePreuve: 'elementDePreuve',
        autocritique: 'autocritique',
        evolution: 'evolution',
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'sql',
        titre: 'SQL',
        definition: 'definition',
        elementDePreuve: 'elementDePreuve',
        autocritique: 'autocritique',
        evolution: 'evolution',
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    }
];