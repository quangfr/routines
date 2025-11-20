const LIBRARY_JSON_DATA = [
  {
    "id": 1,
    "emoji": "🌱",
    "titles": ["Inspirer en ouvrant Habitube"],
    "needs": [
      "organization",
      "joy"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 2,
    "emoji": "🥣",
    "titles": ["Préparer un petit-déjeuner commun"],
    "needs": [
      "nutrition",
      "joy"
    ],
    "contexts": [
      "home",
      "family"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 3,
    "emoji": "🥪",
    "titles": ["Préparer une collation saine"],
    "needs": [
      "nutrition",
      "joy"
    ],
    "contexts": [
      "home",
      "office"
    ],
    "frequency": 3,
    "target": "group"
  },
  {
    "id": 4,
    "emoji": "🍵",
    "titles": ["Préparer une boisson chaude"],
    "needs": [
      "comfort",
      "slowness"
    ],
    "contexts": [
      "home",
      "office"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 5,
    "emoji": "🛒",
    "titles": ["Préparer sa liste de course"],
    "needs": [
      "organization",
      "nutrition"
    ],
    "contexts": [
      "home",
      "family"
    ],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 6,
    "emoji": "🍎",
    "titles": ["Manger plus de fruits"],
    "needs": [
      "nutrition",
      "comfort"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 7,
    "emoji": "💧",
    "titles": ["Remplir sa gourde d’eau"],
    "needs": [
      "nutrition",
      "safety"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 8,
    "emoji": "💊",
    "titles": ["Prendre son traitement"],
    "needs": [
      "comfort",
      "safety"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 9,
    "emoji": "🚭",
    "titles": ["Ne pas fumer aujourd’hui"],
    "needs": [
      "safety",
      "calm"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 10,
    "emoji": "🛁",
    "titles": ["Nettoyer la salle de bains"],
    "needs": [
      "cleanliness",
      "hygiene"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 0.5,
    "target": "individual"
  },
  {
    "id": 11,
    "emoji": "🧴",
    "titles": ["Faire son soin du jour"],
    "needs": [
      "hygiene",
      "comfort"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 12,
    "emoji": "🛀",
    "titles": ["Prendre un bain chaud"],
    "needs": [
      "comfort",
      "hygiene"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 13,
    "emoji": "🦷",
    "titles": ["Bien brosser ses dents"],
    "needs": [
      "hygiene",
      "safety"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 14,
    "emoji": "🛌",
    "titles": ["Changer son linge de lit"],
    "needs": [
      "cleanliness",
      "comfort"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 0.5,
    "target": "individual"
  },
  {
    "id": 15,
    "emoji": "🧹",
    "titles": ["Nettoyer couloir et entrée"],
    "needs": [
      "cleanliness",
      "safety"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 16,
    "emoji": "🍽️",
    "titles": ["Remettre la cuisine en ordre"],
    "needs": [
      "cleanliness",
      "cooperation"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 3,
    "target": "group"
  },
  {
    "id": 17,
    "emoji": "🛋️",
    "titles": ["Ranger le salon"],
    "needs": [
      "cleanliness",
      "comfort"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 3,
    "target": "group"
  },
  {
    "id": 18,
    "emoji": "🚽",
    "titles": ["Nettoyer les toilettes"],
    "needs": [
      "cleanliness",
      "hygiene"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 19,
    "emoji": "🧻",
    "titles": ["Vérifier les produits ménages"],
    "needs": [
      "equipment",
      "cleanliness"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 0.5,
    "target": "group"
  },
  {
    "id": 20,
    "emoji": "🛏️",
    "titles": ["Aérer et ranger la chambre"],
    "needs": [
      "cleanliness",
      "equipment"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 21,
    "emoji": "🪥",
    "titles": ["Ranger ses affaires de toilette"],
    "needs": [
      "privacy",
      "hygiene"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 22,
    "emoji": "🗄️",
    "titles": ["Ranger son bureau"],
    "needs": [
      "organization",
      "equipment"
    ],
    "contexts": [
      "home",
      "office"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 23,
    "emoji": "🏢",
    "titles": ["Ranger la salle de réunion"],
    "needs": [
      "cleanliness",
      "organization"
    ],
    "contexts": [
      "office"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 24,
    "emoji": "💻",
    "titles": ["Trier ses outils numériques"],
    "needs": [
      "organization",
      "calm"
    ],
    "contexts": [
      "office"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 25,
    "emoji": "🖋️",
    "titles": ["Vérifier les fournitures de bureau"],
    "needs": [
      "equipment",
      "organization"
    ],
    "contexts": [
      "office",
      "school"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 26,
    "emoji": "🗑️",
    "titles": ["Sortir les poubelles"],
    "needs": [
      "cleanliness",
      "cooperation"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 27,
    "emoji": "♻️",
    "titles": ["Ramasser et trier les déchets"],
    "needs": [
      "cleanliness",
      "equipment"
    ],
    "contexts": [
      "home",
      "school"
    ],
    "frequency": 3,
    "target": "group"
  },
  {
    "id": 28,
    "emoji": "🗃️",
    "titles": ["Ranger ses étagères"],
    "needs": [
      "organization",
      "privacy"
    ],
    "contexts": [
      "home",
      "social"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 29,
    "emoji": "🚌",
    "titles": ["Préparer son départ"],
    "needs": [
      "organization",
      "calm"
    ],
    "contexts": [
      "home",
      "office",
      "school",
      "outdoor"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 30,
    "emoji": "🛣️",
    "titles": ["Choisir un trajet différent"],
    "needs": [
      "meaning",
      "calm"
    ],
    "contexts": [
      "outdoor"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 31,
    "emoji": "🧰",
    "titles": ["Réparer un petit souci"],
    "needs": [
      "equipment",
      "safety"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 0.5,
    "target": "individual"
  },
  {
    "id": 32,
    "emoji": "🧭",
    "titles": ["Revoir l’agenda"],
    "needs": [
      "organization",
      "privacy"
    ],
    "contexts": [],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 33,
    "emoji": "🗂️",
    "titles": ["Trier ses documents"],
    "needs": [
      "organization",
      "privacy"
    ],
    "contexts": [],
    "frequency": 0.5,
    "target": "individual"
  },
  {
    "id": 34,
    "emoji": "📌",
    "titles": ["Noter ses rappels"],
    "needs": [
      "organization",
      "communication"
    ],
    "contexts": [
      "office"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 35,
    "emoji": "💗",
    "titles": ["Partager une envie"],
    "needs": [
      "expression",
      "joy"
    ],
    "contexts": [
      "social",
      "family"
    ],
    "frequency": 7,
    "target": "group"
  },
  {
    "id": 36,
    "emoji": "💶",
    "titles": ["Vérifier ses dépenses"],
    "needs": [
      "organization",
      "safety"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 0.5,
    "target": "individual"
  },
  {
    "id": 37,
    "emoji": "👚",
    "titles": ["Trier ses vêtements"],
    "needs": [
      "comfort",
      "privacy"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 0.5,
    "target": "individual"
  },
  {
    "id": 38,
    "emoji": "🧺",
    "titles": ["Lancer une machine"],
    "needs": [
      "organization",
      "slowness"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 39,
    "emoji": "🌦️",
    "titles": ["Partager son humeur"],
    "needs": [
      "expression",
      "communication"
    ],
    "contexts": [
      "family"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 40,
    "emoji": "👌",
    "titles": ["Avoir un élan bienveillant"],
    "needs": [
      "cooperation",
      "joy"
    ],
    "contexts": [
      "family",
      "social"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 41,
    "emoji": "🗣️",
    "titles": ["Partager une astuce productive"],
    "needs": [
      "communication",
      "entertainment"
    ],
    "contexts": [
      "office",
      "school",
      "social"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 42,
    "emoji": "📞",
    "titles": ["Contacter un proche"],
    "needs": [
      "communication",
      "slowness"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 43,
    "emoji": "🤝",
    "titles": ["Manger avec sa famille"],
    "needs": [
      "joy",
      "inclusion"
    ],
    "contexts": [
      "social"
    ],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 44,
    "emoji": "🧡",
    "titles": ["Remonter le moral à un ami"],
    "needs": [
      "communication",
      "inclusion"
    ],
    "contexts": [
      "school"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 45,
    "emoji": "😊",
    "titles": ["Sourire à un inconnu"],
    "needs": [
      "joy",
      "inclusion"
    ],
    "contexts": [],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 46,
    "emoji": "🤗",
    "titles": ["Faire un câlin"],
    "needs": [
      "comfort",
      "inclusion"
    ],
    "contexts": [
      "family"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 47,
    "emoji": "💞",
    "titles": ["Dire un merci précis"],
    "needs": [
      "expression",
      "participation"
    ],
    "contexts": [
      "family"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 48,
    "emoji": "💌",
    "titles": ["Laisser un mot doux"],
    "needs": [
      "expression",
      "privacy"
    ],
    "contexts": [
      "family"
    ],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 49,
    "emoji": "👏",
    "titles": ["Encourager quelqu’un"],
    "needs": [
      "participation",
      "joy"
    ],
    "contexts": [
      "home",
      "family",
      "office",
      "school"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 50,
    "emoji": "🙌",
    "titles": ["Valoriser une bonne idée"],
    "needs": [
      "communication",
      "participation"
    ],
    "contexts": [
      "office",
      "school",
      "social"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 51,
    "emoji": "🎁",
    "titles": ["Offrir un petit cadeau"],
    "needs": [
      "cooperation",
      "expression"
    ],
    "contexts": [
      "home",
      "office",
      "school"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 52,
    "emoji": "🧶",
    "titles": ["Inclure une personne isolée"],
    "needs": [
      "inclusion",
      "cooperation"
    ],
    "contexts": [
      "school",
      "social"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 53,
    "emoji": "💡",
    "titles": ["Proposer son aide"],
    "needs": [
      "cooperation",
      "participation"
    ],
    "contexts": [
      "school",
      "office",
      "social"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 54,
    "emoji": "💆‍♀️",
    "titles": ["Offrir un massage court"],
    "needs": [
      "comfort",
      "expression"
    ],
    "contexts": [
      "home",
      "social"
    ],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 55,
    "emoji": "🤐",
    "titles": ["Éviter un gros mot"],
    "needs": [
      "communication",
      "calm"
    ],
    "contexts": [
      "home",
      "school"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 56,
    "emoji": "🌼",
    "titles": ["Penser à un bon moment"],
    "needs": [
      "joy",
      "privacy"
    ],
    "contexts": [],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 57,
    "emoji": "🧠",
    "titles": ["Se rappeler un souvenir doux"],
    "needs": [
      "joy",
      "privacy"
    ],
    "contexts": [],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 58,
    "emoji": "🧘",
    "titles": ["Créer une soirée détente"],
    "needs": [
      "calm",
      "slowness"
    ],
    "contexts": [
      "home",
      "family"
    ],
    "frequency": 0.5,
    "target": "group"
  },
  {
    "id": 59,
    "emoji": "🌙",
    "titles": ["Se coucher avant 23h"],
    "needs": [
      "rest",
      "calm"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 60,
    "emoji": "📵",
    "titles": ["Couper les écrans après 21h"],
    "needs": [
      "slowness",
      "rest"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 61,
    "emoji": "🕯️",
    "titles": ["Créer une ambiance douce"],
    "needs": [
      "nature",
      "slowness"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 62,
    "emoji": "😴",
    "titles": ["Faire une sieste courte"],
    "needs": [
      "rest",
      "calm"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 63,
    "emoji": "🌬️",
    "titles": ["Respirer lentement 2 min"],
    "needs": [
      "slowness",
      "rest"
    ],
    "contexts": [
      "office",
      "school",
      "outdoor"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 64,
    "emoji": "🧘",
    "titles": ["S’asseoir 2 min en silence"],
    "needs": [
      "calm",
      "slowness"
    ],
    "contexts": [
      "home",
      "school"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 65,
    "emoji": "👀",
    "titles": ["Admirer le paysage 30 sec"],
    "needs": [
      "nature",
      "rest"
    ],
    "contexts": [
      "outdoor"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 66,
    "emoji": "🌿",
    "titles": ["Prendre l’air 5 min"],
    "needs": [
      "nature",
      "movement"
    ],
    "contexts": [
      "office",
      "outdoor"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 67,
    "emoji": "🌳",
    "titles": ["Se balader dans la nature"],
    "needs": [
      "nature",
      "rest"
    ],
    "contexts": [
      "social",
      "outdoor"
    ],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 68,
    "emoji": "🕊️",
    "titles": ["Apaiser l’ambiance du groupe"],
    "needs": [
      "calm",
      "participation"
    ],
    "contexts": [
      "school",
      "office",
      "social"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 69,
    "emoji": "🫂",
    "titles": ["Veiller au besoin du groupe"],
    "needs": [
      "inclusion",
      "cooperation"
    ],
    "contexts": [
      "school",
      "office",
      "social"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 70,
    "emoji": "🤸",
    "titles": ["Faire un réveil corporel"],
    "needs": [
      "movement",
      "comfort"
    ],
    "contexts": [],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 71,
    "emoji": "💪",
    "titles": ["Faire 30 min d’exercice"],
    "needs": [
      "movement",
      "comfort"
    ],
    "contexts": [
      "outdoor"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 72,
    "emoji": "🤸‍♂️",
    "titles": ["Faire des étirements"],
    "needs": [
      "movement",
      "comfort"
    ],
    "contexts": [
      "outdoor"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 73,
    "emoji": "👏",
    "titles": ["Applaudir une réussite"],
    "needs": [
      "joy",
      "participation"
    ],
    "contexts": [
      "home",
      "office",
      "school",
      "social"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 74,
    "emoji": "📸",
    "titles": ["Photographier un beau détail"],
    "needs": [
      "nature",
      "expression"
    ],
    "contexts": [
      "home",
      "outdoor"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 75,
    "emoji": "🎧",
    "titles": ["Mettre une musique calme"],
    "needs": [
      "nature",
      "calm"
    ],
    "contexts": [
      "home"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 76,
    "emoji": "🎶",
    "titles": ["Fredonner une chanson"],
    "needs": [
      "expression",
      "entertainment"
    ],
    "contexts": [
      "social"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 77,
    "emoji": "🎮",
    "titles": ["Regarder une comédie"],
    "needs": [
      "joy",
      "entertainment"
    ],
    "contexts": [],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 78,
    "emoji": "🎲",
    "titles": ["Lancer un jeu collectif"],
    "needs": [
      "entertainment",
      "participation"
    ],
    "contexts": [
      "family",
      "social",
      "school",
      "outdoor"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 79,
    "emoji": "🧩",
    "titles": ["Résoudre une énigme"],
    "needs": [
      "meaning",
      "entertainment"
    ],
    "contexts": [],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 80,
    "emoji": "🖼️",
    "titles": ["Faire une sortie culturelle"],
    "needs": [
      "joy",
      "meaning"
    ],
    "contexts": [
      "social",
      "outdoor"
    ],
    "frequency": 0.5,
    "target": "individual"
  },
  {
    "id": 81,
    "emoji": "✍️",
    "titles": ["Écrire 3 lignes"],
    "needs": [
      "privacy",
      "expression"
    ],
    "contexts": [],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 82,
    "emoji": "🖼️",
    "titles": ["Ajouter une touche déco"],
    "needs": [
      "comfort",
      "joy"
    ],
    "contexts": [
      "home",
      "office",
      "social"
    ],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 83,
    "emoji": "🪜",
    "titles": ["Prendre les escaliers"],
    "needs": [
      "movement",
      "comfort"
    ],
    "contexts": [
      "office",
      "school",
      "social"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 84,
    "emoji": "📘",
    "titles": ["Lire 10 pages"],
    "needs": [
      "rest",
      "meaning"
    ],
    "contexts": [
      "home",
      "office"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 85,
    "emoji": "🔧",
    "titles": ["Faire du bricolage"],
    "needs": [
      "equipment",
      "joy"
    ],
    "contexts": [
      "home",
      "social"
    ],
    "frequency": 0.5,
    "target": "individual"
  },
  {
    "id": 86,
    "emoji": "🕺",
    "titles": ["Danser 30 secondes"],
    "needs": [
      "movement",
      "joy"
    ],
    "contexts": [
      "home",
      "social",
      "outdoor"
    ],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 87,
    "emoji": "📻",
    "titles": ["Écouter un podcast"],
    "needs": [
      "rest",
      "meaning"
    ],
    "contexts": [],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 88,
    "emoji": "🤣",
    "titles": ["Apporter une touche d’humour"],
    "needs": [
      "communication",
      "entertainment"
    ],
    "contexts": [
      "school",
      "social"
    ],
    "frequency": 3,
    "target": "group"
  },
  {
    "id": 89,
    "emoji": "🌸",
    "titles": ["Sentir un parfum agréable"],
    "needs": [
      "calm",
      "meaning"
    ],
    "contexts": [
      "home",
      "outdoor"
    ],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 90,
    "emoji": "🍳",
    "titles": ["Préparer un repas sain"],
    "needs": [
      "nutrition",
      "safety"
    ],
    "contexts": [
      "home",
      "family"
    ],
    "frequency": 1,
    "target": "individual"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = LIBRARY_JSON_DATA;
  module.exports.default = LIBRARY_JSON_DATA;
}
if (typeof window !== "undefined") {
  window.LIBRARY_JSON_DATA = LIBRARY_JSON_DATA;
}
