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
    nomImage: string;
}

export const REALISATIONS: Realisation[] = [
    {
        id: 'ads',
        titre: 'CDS ADS',
        introduction: `<p>Ce projet a été réalisé durant mes six mois de stage au sein de l'entreprise Capgemini Engineering. La mission consiste à créer une application permettant aux managers de la branche « Airbus Defense and Space » (ADS) d'intégrer les bons de commande au sein de l'application pour les stocker et en extraire des informations.</p> 
                        <p>Ce projet n'a aucun antécédent, il comportera donc une phase d'étude puis une phase de développement.</p> 
                        <p>Je ne fais partie d'aucune équipe, je serai donc seul à travailler sur l'application avec une aide potentielle d'un superviseur technique. Le client est un manager de la branche et la méthodologie Scrum a été désignée pour la gestion.</p> 
                        <p>Il y a donc au sein de ce projet, une perspective de communication régulière dû à la méthodologie, ce qui implique de bien cerner les demandes du client ainsi qu'être force de proposition pour améliorer l'application et leurs idées.</p>`,
        objectif: `<p>Comme énoncé dans l’introduction, cette application va comporter plusieurs services. Tout d’abord, un système récupérant les fichiers de bon de commande et en récupérer les données, ensuite afficher les données récupérées et automatisées des calculs pour enfin permettre l’extraction de données conservées dans l’application.</p>
                    <p>La phase d’étude de l’application pour définir les technologies à adapter et de bien comprendre les besoins clients sera le premier objectif.</p>
                    <p>Enfin les trois prochains objectifs suivront la logique d’utilisation de l’application. Tout d’abord nous aurons la récupération des données contenues dans le PDF du bon de commande, ensuite le traitement des données récupérées et leurs affichages, pour terminer l’extraction de données demandées par l’utilisateur.</p>`,
        cHumain: `<p>Le groupe projet est constitué d’un seul membre qui n’est autre que moi-même en tant que développeur et aussi Scrum master. Un superviseur technique m’avait été attribué afin de m’apporter de l’aide si besoin ainsi que de me guider au travers des technologies que je pourrais ne pas connaître.</p> 
                    <p>Concernant le client, un manager de la branche qui était aussi mon responsable de stage a été désigné pour remplir ce rôle. En tant que futur utilisateur de l’application, il connaissait les besoins nécessaires à l’application et a su me les décrire durant la période de travail.</p>`,
        cTechnique: `<p>Concernant la partie technique du projet, le Framework Angular est utilisé pour l’interface utilisateur, le langage Javascript est celui pour l’API REST et enfin une base de données en SQL a été mise en place. Ce projet comporte plusieurs objets.</p> 
                    <p>Pour le versioning du projet et pour faciliter la gestion du code j’ai utilisé Gitlab tout au long de la période de travail.</p>`,
        enjeu: `<p>Au sein du projet je pouvais rencontrer un enjeu de taille qui n’était autre que la sauvegarde des données. Ces dernières sont considérées comme des données sensibles qui seront à destination d’une future facturation. Il a fallu s’assurer que dans leurs récupérations depuis le fichier du bon de commande, aucun changement ne soit effectué sur celles-ci. Cela vaut aussi pour la partie calcul mais également pour la partie extraction. J’ai révisé plusieurs fois mes calculs afin de m’assurer que les bons étaient mis en place et que les résultats retrouvés semblaient correspondre.</p> 
                <p>Un risque, rencontré à la fois pendant la phase d’étude mais aussi pendant la phase de développement de la partie récupération des données, a été le modèle des bons de commande. Effectivement nous en viendrons plus en détails plus tard mais la récupération des données est réalisée en se basant sur le modèle de disposition en vigueur lors du développement. Si le modèle venait à changer alors le code de récupération serait lui aussi à changer.</p>`,
        organisation: `<p>Ici l’organisation était assez simpliste, étant seul membre du groupe projet il n’y avait donc pas de répartition de tâches. J’avais tout de même réalisé un plan d’organisation sur les différentes tâches à réaliser et l’ordre de priorité sur lesquelles je devais me concentrer. En premier lieu, j’allais me concentrer sur la phase d’étude, de manière que je sois bien préparé à me lancer sur le projet.  Par la suite je m’étais indiqué que l’ordre de priorité serait le même que la logique d’utilisation de l’application, étant donné que cette dernière fonctionne en un seul et même bloc, aucune étape ne peut être réalisée sans que la précédente ne soit elle-même accomplie.</p>
                        <p>Pour tenir informé le client de mon avancée dans le développement ainsi que lui faire une démonstration de l’application à ce moment-là et aussi pour connaître la suite des fonctionnalités à implémenter, une réunion hebdomadaire était convenue. Enfin une réunion bi-hebdomadaire était mis en place avec mon superviseur technique pour parler des points bloquants, d’outil particulier utilisé au sein de l’application ou alors pour demander des conseils sur mon avancée.</p>`,
        realisation: `<h4>Phase d'étude</h4>
                        <p>Comme énoncé plusieurs fois, pour commencer le projet j’ai décidé de faire une phase d’étude car n’ayant aucun antécédent à l’application il faudra savoir quelles technologies utiliser. Au cours de cette phase, j’ai réalisé un document concernant les différentes technologies à utiliser et les arguments d’utilisation. Ce document a été présenté à mon superviseur technique afin d’avoir son avis mais aussi sa confirmation sur ce que je pourrais employer.</p>
                        <p>Finalement, la technologie qui sera retenue pour la partie interface utilisateur a été le framework « Angular », issue du langage « Typescript ». C’est un framework permettant la création de composants ainsi que leurs assemblages pour leurs utilisations. L’avantage que possède Angular est sa maintenabilité aisée dû à son architecture en composant. Si le développeur a été clair dans sa façon de faire il n’y a généralement pas beaucoup de choses à changer mis à part les éléments contenus dans un composant. Cet argument était le principal qui a conduit à l’utilisation d’Angular au sein de l’application car ce serait un point important et nécessaire au vu des objectifs du client. On savait que l’application serait amenée à être retravailler dans le futur. Un second argument a été sa forte présence dans les projets récents, Angular est un framework qui se démocratise de plus en plus et au regard de cette croissance de popularité, la documentation ainsi que les conseils autour sont d’autant plus nombreux et les développeurs le pratiquant aussi. En choisissant donc ce framework, on augmentait les chances d’avoir un repreneur du projet connaissant le langage.</p>
                        <p>Pour la construction de l’API REST le langage retenu a été « Javascript » avec son environnement d’exécution « NodeJS ». Pour celui-ci l’argument principal a été la librairie permettant l’extraction de données au sein d’un PDF. A l’origine deux langages étaient en opposition pour l’API : le premier étant C# et le second Javascript. Mais après quelques recherches il s’est avéré que C# contenait des librairies pouvant traiter les données d’un PDF mais nécessitant une licence payante, alors que celle de Javascript était elle gratuite bien que plus dure à mettre en place. Le second argument envers Javascript a aussi été son utilisation grandissante et sa polyvalence, de même que pour Angular avoir un langage grandement pratiqué est très pratique. </p>
                        <p>Enfin, la base de données le langage SQL a été conservée ici principalement par aisance avec son utilisation. Etant un langage grandement vu au cours de mon cursus, je savais que ce serait le plus simple à mettre en place dans l’application.</p>
                        <h4>Extraction des données depuis le fichier d'entrée</h4>
                        <p>Pour que l’utilisateur puisse renseigner son fichier de commande il avait un emplacement dans l’application lui permettant d’ajouter son fichier dans le système d’application afin qu’il puisse être traité.</p>
                        <p>La principale partie des données qui était à récupérer se trouvait au sein d’un PDF en plusieurs pages. Ce fichier était issu tout d’abord d’un fichier Excel converti en PDF. Grâce à la librairie trouvée au sein de Javascript j’ai pu mettre en place un algorithme permettant de parcourir, en utilisant les coordonnées des cases du PDF, je pouvais accéder au contenu de chaque case et donc récupérer ce qui était écrit à l’intérieur. La difficulté de cette méthode était que le code devenait obsolète si le modèle de création des bons de commande changeait. Après plusieurs recherches en compagnie de mon superviseur technique aucune méthode meilleure que celle énoncée fut trouvée. </p>
                        <p>Cet algorithme, une fois les différentes données récupérées, les envoyait en base de données afin de les stocker et de permettre leur utilisation plus tard pour les prochaines parties de l’application.</p>
                        <h4>Affichage des données et calculs</h4>
                        <p>Si l’utilisateur voulait consulter les données qu’il venait de charger il devait se rendre sur la page d’affichage, contenant les différentes commandes avec la dernière ajoutée en haut de la page pour faciliter son utilisation.</p>
                        <p>Pour cette page, j’ai utilisé un appel à la base de données contenant toutes les données déjà renseignées. Si l’utilisateur voulait consulter les données d’une commande, l’utilisation du bouton se trouvant sur la commande pouvait l’emmener sur la page avec les données demandées. Sur cette page, on pouvait retrouver les différentes informations contenues dans le fichier, mais aussi des données calculées à partir de celles-ci qui à la base était faites à la main. Enfin trois listes déroulantes permettaient à l’utilisateur de sélectionner des données non renseignées dans le fichier bien qu’utile malgré tout. </p>
                        <p>Cette partie a été beaucoup retravaillée, bien qu’elle ne fût pas particulièrement complexe, elle demandait beaucoup d’informations différentes que le client n’avait pas à chaque itération.</p>
                        <h4>Extraction des données depuis l'application</h4>
                        <p>Finalement la dernière partie de l’application se retrouvant dans le bandeau d’en-tête était la partie permettant de récupérer les données dans un fichier csv afin qu’elles puissent être utilisées pour la facturation.</p>
                        <p>Pour cette fonctionnalité l’utilisateur avait un affichage lui permettant de sélectionner le bon de commande qu’il voulait utiliser ainsi que les données qu’il voulait récupérer afin qu’elles soient téléchargées dans le fichier de sortie. Une fois que l’utilisateur avait renseigné les données qu’il voulait reprendre, une requête était d’abord envoyée à l’API de l’application qui traitait la requête en en envoyant une seconde à la base de données pour récupérer les données souhaitées et les envoyer enfin à l’interface pour les insérer dans le fichier CSV.</p>`,
        fin: `<p>Pour clore le projet, une réunion avec d’autres managers et futurs utilisateurs de l’application a été réalisée pour une démonstration et acquérir leurs avis. A la suite de la réunion, quelques retouches ont été réalisées afin de correspondre aux critiques reçues durant cette réunion de démonstration.</p>
                <p>Pour finir, l’application a été remise aux managers pour sa future utilisation dans les mois suivants la fin du projet.</p>
                <p>On sait que de futures améliorations seront à faire sur l’application tout d’abord au changement du modèle des fichiers de bon de commande, car l’algorithme d’extraction des données sera devenu obsolète et demandera une mise à jour en fonction du nouveau modèle. Aussi le temps manquant certaines fonctionnalités n’a pu être mises en place. </p>`,
        retiens: "Ce projet m’a permis de mieux comprendre l’extraction de données d’un fichier PDF qui reste un fichier protégé et donc difficile d’accès et que je n’avais encore jamais fait. Cela m’a aussi permis de renforcer mes connaissances dans les langages que je pratiquais déjà et d’être plus confiant quant à leurs utilisations par le futur. ",
        liensVersRealisations: [],
        liensVersCompetences: ['javascript', 'angular', 'sql'],
        nomImage: 'ImageBonCommande.png'
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
        liensVersCompetences: ['Javascript'],
        nomImage: 'ImageBonCommande.png'
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
        liensVersCompetences: ['Javascript'],
        nomImage: 'ImageArchi.jpg'
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
        liensVersCompetences: ['Javascript'],
        nomImage: 'ImagePlant.jpg'
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
        liensVersCompetences: ['Javascript'],
        nomImage: 'PetitLogoQapi.png'
    }
];