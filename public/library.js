const LIBRARY_JSON_DATA = [
  {
    "id": 1,
    "emoji": "🍳",
    "title": "Préparer un repas sain",
    "needs": ["nutrition", "safety"],
    "contexts": ["home", "family"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 2,
    "emoji": "🥣",
    "title": "Préparer un petit-déjeuner commun",
    "needs": ["nutrition", "joy"],
    "contexts": ["home", "family"],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 3,
    "emoji": "🥪",
    "title": "Préparer une collation saine",
    "needs": ["nutrition", "joy"],
    "contexts": ["home", "office"],
    "frequency": 3,
    "target": "group"
  },
  {
    "id": 4,
    "emoji": "🍵",
    "title": "Préparer une boisson chaude",
    "needs": ["comfort", "calm"],
    "contexts": ["home", "office"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 5,
    "emoji": "🛒",
    "title": "Préparer sa liste de course",
    "needs": ["organization", "nutrition"],
    "contexts": ["home", "family"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 6,
    "emoji": "🍎",
    "title": "Manger plus de fruits",
    "needs": ["nutrition", "comfort"],
    "contexts": ["home"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 7,
    "emoji": "💧",
    "title": "Remplir sa gourde d’eau",
    "needs": ["nutrition", "comfort"],
    "contexts": ["home"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 8,
    "emoji": "💊",
    "title": "Prendre son traitement",
    "needs": ["comfort", "safety"],
    "contexts": ["home"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 9,
    "emoji": "🚭",
    "title": "Ne pas fumer aujourd’hui",
    "needs": ["safety", "calm"],
    "contexts": ["home", "office"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 10,
    "emoji": "🛁",
    "title": "Nettoyer la salle de bains",
    "needs": ["cleanliness", "hygiene"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 11,
    "emoji": "🧴",
    "title": "Faire son soin du jour",
    "needs": ["hygiene", "comfort"],
    "contexts": ["home"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 12,
    "emoji": "🛀",
    "title": "Prendre un bain chaud",
    "needs": ["comfort", "calm"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 13,
    "emoji": "🦷",
    "title": "Bien brosser ses dents",
    "needs": ["hygiene"],
    "contexts": ["home", "family"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 14,
    "emoji": "🛌",
    "title": "Changer son linge de lit",
    "needs": ["cleanliness", "comfort"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 15,
    "emoji": "🧹",
    "title": "Nettoyer couloir et entrée",
    "needs": ["cleanliness", "safety"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 16,
    "emoji": "🍽️",
    "title": "Remettre la cuisine en ordre",
    "needs": ["cleanliness", "hygiene"],
    "contexts": ["home"],
    "frequency": 3,
    "target": "group"
  },
  {
    "id": 17,
    "emoji": "🛋️",
    "title": "Ranger le salon",
    "needs": ["cleanliness", "comfort"],
    "contexts": ["home"],
    "frequency": 3,
    "target": "group"
  },
  {
    "id": 18,
    "emoji": "🚽",
    "title": "Nettoyer les toilettes",
    "needs": ["cleanliness", "hygiene"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 19,
    "emoji": "🧻",
    "title": "Vérifier les produits ménages",
    "needs": ["equipment", "cleanliness"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 20,
    "emoji": "🛏️",
    "title": "Aérer et ranger la chambre",
    "needs": ["cleanliness", "comfort"],
    "contexts": ["home"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 21,
    "emoji": "🪥",
    "title": "Ranger ses affaires de toilette",
    "needs": ["equipment", "privacy"],
    "contexts": ["home", "family"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 22,
    "emoji": "💻",
    "title": "Ranger son bureau",
    "needs": ["organization", "cleanliness"],
    "contexts": ["home", "office"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 23,
    "emoji": "🏢",
    "title": "Ranger la salle de réunion",
    "needs": ["cleanliness", "organization"],
    "contexts": ["office"],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 24,
    "emoji": "🖥️",
    "title": "Ranger le poste de travail",
    "needs": ["organization", "cleanliness"],
    "contexts": ["office"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 25,
    "emoji": "📦",
    "title": "Vérifier les fournitures communes",
    "needs": ["organization", "equipment"],
    "contexts": ["office", "school"],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 26,
    "emoji": "🗑️",
    "title": "Sortir les poubelles",
    "needs": ["cleanliness", "cooperation"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 27,
    "emoji": "♻️",
    "title": "Ramasser et trier les déchets",
    "needs": ["cleanliness", "organization"],
    "contexts": ["home", "school"],
    "frequency": 3,
    "target": "group"
  },
  {
    "id": 28,
    "emoji": "🗃️",
    "title": "Ranger ses étagères",
    "needs": ["organization", "privacy"],
    "contexts": ["home", "office", "social"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 29,
    "emoji": "🚌",
    "title": "Préparer son départ",
    "needs": ["organization", "calm"],
    "contexts": ["home", "office", "school"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 30,
    "emoji": "🛣️",
    "title": "Choisir un trajet différent",
    "needs": ["curiosity", "calm"],
    "contexts": ["home"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 31,
    "emoji": "🧰",
    "title": "Réparer un petit souci",
    "needs": ["equipment", "safety"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 32,
    "emoji": "🧭",
    "title": "Revoir l’agenda",
    "needs": ["organization", "calm","privacy"],
    "contexts": ["home", "family"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 33,
    "emoji": "🗂️",
    "title": "Trier ses documents",
    "needs": ["organization","privacy"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 34,
    "emoji": "📌",
    "title": "Noter ses rappels",
    "needs": ["organization", "communication","privacy"],
    "contexts": ["home", "office"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 35,
    "emoji": "💗",
    "title": "Partager une envie",
    "needs": ["expression", "joy"],
    "contexts": ["home", "office","social"],
    "frequency": 7,
    "target": "group"
  },
  {
    "id": 36,
    "emoji": "💶",
    "title": "Vérifier ses dépenses",
    "needs": ["organization", "safety","privacy"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 37,
    "emoji": "👚",
    "title": "Trier ses vêtements",
    "needs": ["organization", "comfort","privacy"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 38,
    "emoji": "🧺",
    "title": "Lancer une machine",
    "needs": ["cleanliness", "organization"],
    "contexts": ["home"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 39,
    "emoji": "🌦️",
    "title": "Partager son humeur",
    "needs": ["expression", "communication"],
    "contexts": ["home", "family"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 40,
    "emoji": "👌",
    "title": "Avoir un élan bienveillant",
    "needs": ["cooperation", "joy"],
    "contexts": ["home", "family","social"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 41,
    "emoji": "🗣️",
    "title": "Partager une astuce de travail",
    "needs": ["communication", "cooperation"],
    "contexts": ["office", "school", "social"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 42,
    "emoji": "📞",
    "title": "Contacter un proche",
    "needs": ["communication", "joy"],
    "contexts": ["home"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 43,
    "emoji": "🤝",
    "title": "Manger avec sa famille",
    "needs": ["joy", "inclusion"],
    "contexts": ["home", "social"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 44,
    "emoji": "🧡",
    "title": "Remonter le moral à un ami",
    "needs": ["communication", "inclusion"],
    "contexts": ["home", "office", "school"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 45,
    "emoji": "😊",
    "title": "Sourire à un inconnu",
    "needs": ["joy", "inclusion"],
    "contexts": ["home"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 46,
    "emoji": "🤗",
    "title": "Faire un câlin",
    "needs": ["joy", "comfort"],
    "contexts": ["home", "family"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 47,
    "emoji": "💞",
    "title": "Dire un merci précis",
    "needs": ["joy", "expression"],
    "contexts": ["home", "family", "office"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 48,
    "emoji": "💌",
    "title": "Laisser un mot doux",
    "needs": ["expression", "joy"],
    "contexts": ["home", "family"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 49,
    "emoji": "👏",
    "title": "Encourager quelqu’un",
    "needs": ["communication", "joy"],
    "contexts": ["home", "office", "school"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 50,
    "emoji": "🙌",
    "title": "Valoriser une bonne idée",
    "needs": ["communication", "participation"],
    "contexts": ["office", "school", "social"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 51,
    "emoji": "🎁",
    "title": "Offrir un petit cadeau",
    "needs": ["joy", "cooperation"],
    "contexts": ["home", "office", "school"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 52,
    "emoji": "🧶",
    "title": "Inclure une personne isolée",
    "needs": ["inclusion", "joy"],
    "contexts": ["school", "social", "office"],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 53,
    "emoji": "💡",
    "title": "Proposer son aide",
    "needs": ["cooperation", "participation"],
    "contexts": ["school", "office", "social"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 54,
    "emoji": "💆‍♀️",
    "title": "Offrir un massage court",
    "needs": ["comfort", "joy"],
    "contexts": ["home", "social"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 55,
    "emoji": "🤐",
    "title": "Éviter un gros mot",
    "needs": ["communication", "calm"],
    "contexts": ["home", "school"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 56,
    "emoji": "🌼",
    "title": "Penser à un bon moment",
    "needs": ["joy", "calm","privacy"],
    "contexts": ["home"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 57,
    "emoji": "🧠",
    "title": "Se rappeler un souvenir doux",
    "needs": ["joy", "calm"],
    "contexts": ["home"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 58,
    "emoji": "🧘",
    "title": "Créer une soirée détente",
    "needs": ["calm", "slowness"],
    "contexts": ["home", "family"],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 59,
    "emoji": "🌙",
    "title": "Se coucher avant 23h",
    "needs": ["sleep", "calm"],
    "contexts": ["home"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 60,
    "emoji": "📵",
    "title": "Couper les écrans après 21h",
    "needs": ["calm", "slowness"],
    "contexts": ["home"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 61,
    "emoji": "🕯️",
    "title": "Créer une ambiance douce",
    "needs": ["calm", "comfort"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 62,
    "emoji": "😴",
    "title": "Faire une sieste courte",
    "needs": ["sleep", "calm","privacy"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 63,
    "emoji": "🌬️",
    "title": "Respirer lentement 2 min",
    "needs": ["calm"],
    "contexts": ["home", "office", "school"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 64,
    "emoji": "🧘",
    "title": "S’asseoir 2 min en silence",
    "needs": ["calm", "slowness"],
    "contexts": ["home", "office", "school"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 65,
    "emoji": "👀",
    "title": "Admirer le paysage 30 sec",
    "needs": ["calm", "nature"],
    "contexts": ["home"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 66,
    "emoji": "🌿",
    "title": "Prendre l’air 5 min",
    "needs": ["calm", "nature"],
    "contexts": ["home", "office"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 67,
    "emoji": "🌳",
    "title": "Se balader dans la nature",
    "needs": ["nature", "calm"],
    "contexts": ["social"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 68,
    "emoji": "🕊️",
    "title": "Apaiser l’ambiance du groupe",
    "needs": ["calm", "participation"],
    "contexts": ["school", "office", "social"],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 69,
    "emoji": "🫂",
    "title": "Veiller au besoin du groupe",
    "needs": ["inclusion", "cooperation"],
    "contexts": ["school", "office", "social"],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 70,
    "emoji": "🤸",
    "title": "Faire un réveil corporel",
    "needs": ["comfort","privacy"],
    "contexts": ["home"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 71,
    "emoji": "💪",
    "title": "Faire 30 min d’exercice",
    "needs": ["comfort"],
    "contexts": ["home"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 72,
    "emoji": "🤸‍♂️",
    "title": "Faire des étirements",
    "needs": ["comfort"],
    "contexts": ["home", "office"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 73,
    "emoji": "👏",
    "title": "Applaudir une réussite",
    "needs": ["joy", "participation"],
    "contexts": ["home", "office", "school","social"],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 74,
    "emoji": "📸",
    "title": "Photographier un beau détail",
    "needs": ["expression", "curiosity"],
    "contexts": ["home"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 75,
    "emoji": "🎧",
    "title": "Mettre une musique calme",
    "needs": ["joy", "calm"],
    "contexts": ["home"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 76,
    "emoji": "🎶",
    "title": "Fredonner une chanson",
    "needs": ["joy", "expression"],
    "contexts": ["home", "social"],
    "frequency": 7,
    "target": "individual"
  },
  {
    "id": 77,
    "emoji": "🎮",
    "title": "Regarder une comédie",
    "needs": ["joy", "entertainment"],
    "contexts": ["home"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 78,
    "emoji": "🎲",
    "title": "Lancer un jeu collectif",
    "needs": ["joy", "participation","entertainment"],
    "contexts": ["home", "social", "school"],
    "frequency": 1,
    "target": "group"
  },
  {
    "id": 79,
    "emoji": "🧩",
    "title": "Résoudre une énigme",
    "needs": ["curiosity", "entertainment"],
    "contexts": ["home", "office"],
    "frequency": 3,
    "target": "individual"
  },
  {
    "id": 80,
    "emoji": "🖼️",
    "title": "Faire une sortie culturelle",
    "needs": ["joy", "curiosity"],
    "contexts": ["social"],
    "frequency": 1,
    "target": "individual"
  },
  {
    "id": 81,
    "emoji": "✍️",
    "title": "Écrire 3 lignes",
    "needs": ["expression", "calm"],
    "contexts": ["home", "office"],
    "frequency": 7,
    "target": "individual"
  },
  {
  "id": 82,
  "emoji": "🖼️",
  "title": "Ajouter une touche déco",
  "needs": ["comfort", "joy"],
  "contexts": ["home", "office", "social"],
  "frequency": 1,
  "target": "group"
},
{
  "id": 83,
  "emoji": "🪜",
  "title": "Prendre les escaliers",
  "needs": ["comfort", "movement"],
  "contexts": ["office", "school", "social"],
  "frequency": 7,
  "target": "individual"
},
{
  "id": 84,
  "emoji": "📘",
  "title": "Lire 10 pages",
  "needs": ["calm", "curiosity"],
  "contexts": ["home", "office"],
  "frequency": 3,
  "target": "individual"
},
{
  "id": 85,
  "emoji": "🔧",
  "title": "Faire du bricolage",
  "needs": ["equipment", "participation", "joy"],
  "contexts": ["home", "social"],
  "frequency": 1,
  "target": "individual"
},
{
  "id": 86,
  "emoji": "🕺",
  "title": "Danser 30 secondes",
  "needs": ["joy", "movement"],
  "contexts": ["home", "social"],
  "frequency": 7,
  "target": "individual"
},
{
  "id": 87,
  "emoji": "📻",
  "title": "Écouter un podcast",
  "needs": ["curiosity", "calm"],
  "contexts": ["home", "office"],
  "frequency": 3,
  "target": "individual"
},
{
  "id": 88,
  "emoji": "🤣",
  "title": "Apporter une touche d’humour",
  "needs": ["joy", "communication"],
  "contexts": ["home", "office", "school", "social"],
  "frequency": 3,
  "target": "group"
},
{
  "id": 89,
  "emoji": "🌸",
  "title": "Sentir un parfum agréable",
  "needs": ["calm", "sense"],
  "contexts": ["home", "office"],
  "frequency": 3,
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
