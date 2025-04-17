export interface Competence {
    id: string;
    titre: string;
    definition: string;
    elementDePreuve: string;
    autocritique: string;
    evolution: string;
    icon: string;
    niveau: number;
    liensVersRealisations: string[];
    liensVersCompetences: string[];
}

export const COMPETENCES: Competence[] = [
    {
        id: 'adaptation',
        titre: 'Adaptation besoin client',
        definition: 'definition',
        elementDePreuve: 'elementDePreuve',
        autocritique: 'autocritique',
        evolution: 'evolution',
        icon: 'handshake',
        niveau: 4,
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    },
    {
        id: 'angular',
        titre: 'Angular',
        definition: "Angular est un framework du langage TypeScript permettant un développement de site web via une architecture en « composant ». Ce dernier est un agencement permettant au développeur de créer des composants indépendants qui peuvent être disposés dans l'application et réutilisables. Ce framework permet aussi l'ajout de librairie et d'outils facilitant le développement et les tests.",
        elementDePreuve: "Ma première expérience avec Angular a eu lieu à la fin de ma seconde année dans l'école. J'ai pu y apprendre les bases du framework, quelques bonnes pratiques à avoir mais aussi qu'elles sont ses points forts et dans quel contexte il sera plus intéressant à utiliser que d'autres langages qui ont une architecture similaire. Pendant cette même année j'ai pu aussi appliquer ce que j'ai pu voir pendant les cours via le projet du semestre qui comportait Angular comme technologie pour développer l'interface utilisateur. J'ai donc pu appliquer les bonnes pratiques vues précédemment mais aussi approfondir mes connaissances en faisant mes propres recherches ainsi que mes propres expériences. Effectivement pour mener à bien notre projet, mon groupe et moi-même avions plusieurs fonctionnalités à implémenter, ces dernières nous ont demandé de faire beaucoup d'essais quant à la manière de les intégrer mais aussi sur la sécurisation des données ou encore de réussir à rendre l'application ergonomique pour faciliter l'expérience des futurs utilisateurs.	Par la suite, à la fin de ma troisième année au sein de l'école, pour mon sixième semestre j'ai effectué un stage en entreprise. Durant ce dernier, ma mission demandait le développement d'une application à partir de zéro et c'est pour cela que l'entreprise me laissa le choix sur les langages que je voulais utiliser. Pour la partie interface de l'utilisateur, j'ai décidé d'utiliser Angular afin d'approfondir mes connaissances, mais aussi pour vérifier si, un an après, les notions apprises durant mon cursus avaient été bien retenues et enfin essayer d'appliquer le tout en situation réelle et avec des besoins différents de ce que j'avais déjà réalisé. Enfin, la mission dans laquelle je fais partie possède aussi son interface utilisateur réalisé via ce framework, mais cette fois-ci sur un travail déjà existant depuis une dizaine d'années. Cela m'a permis de voir un autre côté du framework, un code bien construit en Angular permet de facilement le maintenir à jour. Ceci grâce à la partie composant du framework qui permet de modifier que le composant concerné et non une page entière.",
        autocritique: "Pour le framework Angular j'estime avoir un niveau confirmé. Grâce à ma mission actuelle je remarque que j'ai encore des progrès à faire concernant les bonnes pratiques de ce framework afin de correctement les maîtriser et les appliquer. Ces bonnes habitudes pour moi sont importantes pour cette partie maintenabilité d'un projet. Comme j'ai pu le dire précédemment reprendre un code qui a pas mal d'ancienneté et a un énorme travail abattu ne se maintient pas forcément facilement, or en utilisant ces bonnes pratiques je sais que la reprise d'un code sera grandement facilitée. Cependant, à force de beaucoup employer ce framework j'ai pu utiliser et connaître plusieurs librairies qui aident au développement d'application, ce qui me permet d'affirmer que mon niveau avec ce framework reste assez élevé.",
        evolution: "Comme j'ai pu le dire précédemment, j'ai bien conscience que ma plus grande évolution sera l'apprentissage et l'utilisation de toutes les bonnes pratiques qui peuvent être utilisées afin de rendre un code plus facilement maintenable et compréhensible pour un futur repreneur de ma solution ou encore pour me permettre de modifier mon travail plus facilement dans le futur. Je sais aussi qu'il y a encore quelques fonctionnalités dont je n'ai pas encore connaissance et qui pourraient s'avérer être utile par la suite. Etant donné que mon objectif d'évolution est architecte j'aurais besoin de connaître convenablement Angular afin de savoir quand et sur quel projet il me faudra l'utiliser mais aussi de quelle manière. Cette compétence sera améliorée sur la durée en continuant de la pratiquer au sein de mon entreprise mais aussi en faisant des formations plus poussées dans ce framework car j'aimerais en faire l'une de mes spécialisations.",
        icon: 'integration_instructions',
        niveau: 4,
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
        icon: 'track_changes',
        niveau: 3,
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
        icon: 'bar_chart',
        niveau: 3,
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
        icon: 'chat',
        niveau: 5,
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
        icon: 'assignment',
        niveau: 2,
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
        icon: 'javascript',
        niveau: 4,
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
        icon: 'dns',
        niveau: 3,
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
        icon: 'terminal',
        niveau: 2,
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
        icon: 'storage',
        niveau: 3,
        liensVersRealisations: ['ArchWeb'],
        liensVersCompetences: ['Javascript']
    }
];