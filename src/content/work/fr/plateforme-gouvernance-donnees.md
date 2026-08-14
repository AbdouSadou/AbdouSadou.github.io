---
title: 'Plateforme de gouvernance de données'
outcome: 'Une plateforme de gouvernance de bout en bout sur données ouvertes françaises, où chaque règle est tenue par un test plutôt qu''écrite dans une politique.'
stack: ['PostgreSQL', 'dbt', 'OpenMetadata', 'Soda']
year: '2026'
order: 2
screenshots:
  - src: '../screens/gouvernance-lignage.png'
    alt: 'Graphe de lignage de bout en bout dans OpenMetadata, du pipeline d''ingestion aux couches raw, staging et marts jusqu''à l''indicateur de prix, avec le lignage colonne déplié'
    caption: 'FIG 01 · lignage · du fichier ouvert à l''indicateur, au niveau colonne · données ouvertes'
  - src: '../screens/gouvernance-glossaire.png'
    alt: 'Glossaire métier français dans OpenMetadata : termes hiérarchisés sur l''immobilier, les entreprises et la gouvernance, avec les actifs de données liés'
    caption: 'FIG 02 · glossaire métier · 40 termes français liés à des colonnes réelles · données ouvertes'
  - src: '../screens/gouvernance-classification.png'
    alt: 'Liste des colonnes de la dimension établissement avec les étiquettes de sensibilité et RGPD, montrant les données personnelles masquées à côté des colonnes publiques'
    caption: 'FIG 03 · classification · étiquettes RGPD et sensibilité par colonne · données ouvertes'
---

## Contexte

Une donnée ne vaut que si cinq questions ont une réponse : ce qu'elle veut dire, qui en répond, d'où elle vient, ce qu'elle vaut et ce qu'on a le droit d'en faire. Dans la plupart des organisations, ces réponses existent — dispersées entre un tableur, la mémoire de trois personnes et un wiki que plus personne n'a ouvert depuis la migration. J'ai voulu construire l'inverse, sur des données que n'importe qui peut vérifier : les valeurs foncières, le répertoire Sirene et le code officiel géographique.

## Mon rôle

Tout : la spécification, la modélisation, l'implémentation et les documents de gouvernance eux-mêmes. Data owner et data steward sur le papier, data engineer en pratique — c'est-à-dire précisément le cumul qu'une organisation réelle doit éviter, et que la matrice RACI de la charte décrit comme un modèle cible plutôt que comme la réalité d'un projet mené seul.

## Démarche

1. J'ai commencé par les rôles, le glossaire métier et la classification — pas par les pipelines. Ce que la donnée signifie précède la façon dont elle circule.
2. J'ai chargé trois jeux de données ouvertes de manière idempotente, en enregistrant pour chaque fichier son URL résolue, sa licence, son empreinte et le périmètre appliqué : tout chiffre peut être remonté jusqu'à sa source.
3. J'ai modélisé sous dbt en couches staging, intermediate et marts, documenté chaque modèle et chaque colonne en français, et rendu impossible la fusion d'une colonne non documentée.
4. J'ai traduit la règle RGPD en une macro unique adossée à quatre tests bloquants, plutôt qu'en un paragraphe de politique.
5. J'ai réparti la qualité sur trois niveaux, une règle par niveau : les contrôles structurels qui bloquent une construction, l'observabilité qui suit une dérive, et les règles métier qu'un data owner peut amender sans écrire de SQL.

## Décisions de gouvernance

- **La règle de masquage vit en un seul endroit.** Une macro dbt porte toute la logique de diffusion partielle Sirene : un DPO peut la relire sans lire le SQL du projet. Quatre tests en sévérité erreur rendent une fuite impubliable.
- **Plus strict que la source, délibérément.** L'Insee continue de publier la géolocalisation précise des unités qui se sont opposées à la diffusion — pour un entrepreneur individuel, c'est son domicile. La plateforme la supprime, et la décision est écrite avec son raisonnement.
- **Le catalogue est le produit, donc la documentation est un verrou.** Chaque colonne de mart porte une description française, et l'intégration continue échoue s'il en manque une. Le taux de documentation n'est pas une ambition mesurée au trimestre : c'est une condition de construction.
- **Le lignage commence au fichier source, pas à la base.** Les pipelines d'ingestion sont déclarés comme des actifs du catalogue : le graphe répond à « d'où sort ce chiffre » jusqu'au fichier ouvert publié par l'État.
- **Un contrôle qui n'a jamais rien attrapé est une hypothèse.** Un exercice rejouable injecte un lot corrompu et exige que les tests de transformation *et* les règles métier échouent, puis se rétablissent.

## Résultat

129 actifs catalogués ; 100 % des colonnes de marts documentées, avec un propriétaire et un domaine ; un glossaire de 40 termes français reliés à des colonnes réelles ; 142 étiquettes de classification sur 71 colonnes ; 117 nœuds dbt dont quatre contrôles RGPD bloquants ; 26 règles métier sous Soda.

Le résultat que je n'attendais pas, c'est que l'exercice d'incident m'a pris en défaut. Sa première version passait au vert : les défauts que j'avais injectés ne heurtaient que des seuils d'avertissement, donc rien ne bloquait. L'exercice l'a signalé honnêtement, et j'ai refait le scénario contre des contrôles bloquants. Un dispositif de gouvernance qui n'a jamais échoué volontairement n'a pas été testé, seulement décrit.

Le code est public : [github.com/AbdouSadou/plateforme-gouvernance-donnees](https://github.com/AbdouSadou/plateforme-gouvernance-donnees). `make demo` rejoue toute la chaîne sur des jeux de test synthétiques en une dizaine de minutes, hors ligne.
