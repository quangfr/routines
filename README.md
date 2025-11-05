# Routine Buddy (prototype)

Routine Buddy est une mini application monopage qui aide à suivre les rituels du quotidien sur une base hebdomadaire.

## Vue d'ensemble

- **Accueil** : la semaine courante (lundi → dimanche) est résumée dans une carte de progression.
  - Les pastilles 🟩, 🟨 et 🟥 indiquent combien d'activités sont parfaitement suivies, en retard conseillé ou en retard obligatoire.
  - La rangée de sept cases colore chaque jour de la semaine selon l'état global :
    - 🟩 toutes les activités dues ont été réalisées ce jour-là ;
    - 🟨 seules des activités conseillées manquent ;
    - 🟥 au moins une activité obligatoire manque ;
    - ⬜ jour à venir ;
    - Les jours sans activité due sont affichés en gris.
- **Rubriques** : chaque catégorie présente les mêmes sept cases pour visualiser l'avancement par jour et permet d'ouvrir la liste détaillée des activités.
- **Historique** : on peut remonter semaine par semaine (jusqu'à la semaine courante) pour revoir les indicateurs de chaque catégorie. La période affichée est précisée sous forme d'intervalle jour/mois.

## Gestion des activités

- Une activité possède : un nom, un émoji, une priorité (obligatoire ou conseillée) et une fréquence.
- Les fréquences disponibles sont :
  - **Quotidien** : activité due chaque jour.
  - **Jour(s) spécifique(s)** : activité due uniquement les jours cochés (possibilité d'en choisir plusieurs).
  - **Hebdomadaire** : activité à réaliser une fois par semaine, sur le jour préféré sélectionné.
- Depuis la vue d'une rubrique, chaque activité affiche une ligne de sept cases pour la semaine sélectionnée. Cliquer sur une case due bascule l'état du jour (fait / non fait).
- Le bouton **✏️ Modifier** ouvre la fenêtre d'édition permettant d'ajuster tous les champs ou de supprimer l'activité.
- L'émoji peut être saisi directement ou choisi via le sélecteur enrichi : tape un mot-clé (sport, fruit, détente…) pour filtrer la liste puis clique sur l'émoji souhaité.

## Navigation

- Les boutons de la barre inférieure permettent d'alterner entre **Accueil** et **Historique**.
- Dans l'historique, les boutons « Semaine précédente » et « Semaine suivante » déplacent la fenêtre hebdomadaire.
- Depuis une carte de rubrique (accueil ou historique), un clic ouvre la vue détaillée correspondante. Le bouton « ← Accueil » ramène à la page d'accueil.

Les données sont stockées dans le `localStorage` du navigateur (clé `ROUTINE_BUDDY_V2`). Le prototype est autonome : aucune dépendance externe n'est requise.
