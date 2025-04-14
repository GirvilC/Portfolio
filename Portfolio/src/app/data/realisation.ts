export interface Realisation {
    id: string;
    titre: string;
    introduction: string;
    objectif: string;
    cHumain: string;
    cTechnique: string;
    enjeu: string;
    organisation: string;
    realisation: string;
    fin: string;
    retiens: string;
    liensVersRealisations: string[];
    liensVersCompetences: string[];
}

export const REALISATIONS: Realisation[] = [
    {
        id: 'ads',
        titre: 'CDS ADS',
        introduction: 'introduction',
        objectif: 'objectifs',
        cHumain: "COntexte Humain",
        cTechnique: "Contexte Technique",
        enjeu: "Enjeux et Risques",
        organisation: "organisation",
        realisation: "Realisation",
        fin: "Fin de Projets",
        retiens: "retiens",
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'amt',
        titre: 'CDS AMT',
        introduction: 'introduction',
        objectif: 'objectifs',
        cHumain: "COntexte Humain",
        cTechnique: "Contexte Technique",
        enjeu: "Enjeux et Risques",
        organisation: "organisation",
        realisation: "Realisation",
        fin: "Fin de Projets",
        retiens: "retiens",
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'archweb',
        titre: 'ArchWeb',
        introduction: 'introduction',
        objectif: 'objectifs',
        cHumain: "COntexte Humain",
        cTechnique: "Contexte Technique",
        enjeu: "Enjeux et Risques",
        organisation: "organisation",
        realisation: "Realisation",
        fin: "Fin de Projets",
        retiens: "retiens",
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'plant',
        titre: 'PLANT',
        introduction: 'introduction',
        objectif: 'objectifs',
        cHumain: "COntexte Humain",
        cTechnique: "Contexte Technique",
        enjeu: "Enjeux et Risques",
        organisation: "organisation",
        realisation: "Realisation",
        fin: "Fin de Projets",
        retiens: "retiens",
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'qapi',
        titre: 'Qapi',
        introduction: 'introduction',
        objectif: 'objectifs',
        cHumain: "COntexte Humain",
        cTechnique: "Contexte Technique",
        enjeu: "Enjeux et Risques",
        organisation: "organisation",
        realisation: "Realisation",
        fin: "Fin de Projets",
        retiens: "retiens",
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    }
];