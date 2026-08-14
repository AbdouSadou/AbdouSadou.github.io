---
title: 'Decision Tree Builder'
outcome: 'Un outil d''aide à la décision où rien de malformé n''entre : validation stricte, évaluation interactive, historique d''édition complet.'
stack: ['Next.js', 'TypeScript']
year: '2024'
order: 4
demo: 'https://abdousadou.github.io/es_builder_clone/'
---

## Contexte

La logique de décision vit le plus souvent dans des présentations et des feuilles de calcul, où elle ne peut pas être testée et où elle est rarement tenue à jour. Je voulais un outil où un arbre de décision est une vraie structure de données : quelque chose que l'on peut valider, évaluer de manière interactive et exporter.

## Mon rôle

Mon deuxième produit en solo : je l'ai conçu et construit de bout en bout en Next.js et TypeScript.

## Démarche

1. J'ai d'abord modélisé l'arbre comme une structure de données stricte, pour que chaque fonctionnalité ultérieure ait une forme définie sur laquelle s'appuyer.
2. J'ai construit une validation à l'import couvrant le type, la structure, la profondeur et le volume : toute entrée malformée est rejetée à la frontière avec un motif précis.
3. J'ai ajouté une évaluation interactive, pour qu'un arbre puisse être parcouru question par question au lieu d'être lu comme un diagramme.
4. J'ai terminé par un historique d'édition annuler/rétablir et l'export en JSON, TXT et DOC.

## Décisions de gouvernance

- **La validation avant l'entrée.** Rien ne rejoint le modèle avant d'avoir passé les contrôles de type, de structure, de profondeur et de volume : le même principe de contrôle à la porte que j'applique aux pipelines d'entreprise, à plus petite échelle.
- **Des limites déclarées.** Les plafonds de profondeur et de volume sont explicites, plutôt que découverts au moment de la défaillance.
- **Des modifications récupérables.** L'historique annuler/rétablir fait qu'aucun changement destructeur n'est définitif ; l'erreur utilisateur est anticipée et prévue dès la conception.
- **Des sorties portables.** L'export en JSON, TXT et DOC laisse à l'utilisateur la propriété de sa logique de décision. Aucun verrouillage.
- **Des invariants dans le système de types.** TypeScript porte les règles de la structure, de sorte qu'un arbre invalide est impossible à représenter, et pas seulement improbable.

## Résultat

Le second des deux produits que j'ai conçus, construits et livrés de bout en bout, en solo. Petit à dessein, et une démonstration compacte du principe qui sous-tend les systèmes plus grands : décider ce que valide veut dire, puis le faire respecter à la porte.
