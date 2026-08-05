/*
  =============================================
  RÉALISATIONS - FICHIER FACILE À MODIFIER
  =============================================

  Pour ajouter une réalisation :
  1. Copie un bloc existant
  2. Modifie les informations
  3. Enregistre le fichier

  Champs disponibles :
  - titre       : nom du projet
  - secteur     : Restaurant, Hôtel, Bureau, Commerce, Santé, Collectivité, etc.
  - lieu        : ville ou région
  - categorie   : decoration, branding, signaletique, commerce
  - image       : chemin vers l'image dans assets/images/
  - video       : chemin vers la vidéo (optionnel, laisser vide si pas de vidéo)
  - large       : true pour afficher en grand format, false sinon

  =============================================
*/

const realisations = [
  {
    titre: "Signalétique intérieure",
    secteur: "Bureaux",
    lieu: "Grand Est",
    categorie: "signaletique",
    image: "assets/images/projet-1.jpg",
    video: "",
    large: true
  },

  {
    titre: "Fresque décorative",
    secteur: "Restaurant",
    lieu: "Nancy",
    categorie: "decoration",
    image: "assets/images/projet-2.jpg",
    video: "",
    large: false
  },

  {
    titre: "Branding mural",
    secteur: "Entreprise",
    lieu: "Metz",
    categorie: "branding",
    image: "assets/images/projet-3.jpg",
    video: "",
    large: false
  },

  {
    titre: "Timelapse impression",
    secteur: "Showroom",
    lieu: "Luxembourg",
    categorie: "commerce",
    image: "",
    video: "assets/videos/timelapse-1.mp4",
    large: false
  }

  /*
    Pour ajouter un nouveau projet, copie ce bloc et colle-le avant le crochet ] :

    ,
    {
      titre: "Nom du projet",
      secteur: "Secteur",
      lieu: "Ville",
      categorie: "decoration",
      image: "assets/images/nom-image.jpg",
      video: "",
      large: false
    }
  */
];

