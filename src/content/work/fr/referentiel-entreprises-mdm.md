---
title: 'Référentiel entreprises'
outcome: 'Un référentiel « golden record » construit sur un CRM dégradé dont je connais la réponse : F1 de 0,977 et complétude SIRET portée de 60 % à 99,5 % — mesurés, pas affirmés.'
stack: ['Python', 'Splink', 'DuckDB', 'PostgreSQL', 'Streamlit']
year: '2026'
order: 3
screenshots:
  - src: '../screens/mdm-precision-rappel.png'
    alt: 'Courbes de précision, rappel et F1 tracées de 0,50 à 0,95, avec une ligne verticale marquant le seuil de rapprochement automatique retenu à 0,85'
    caption: 'FIG 01 · politique de seuils · le compromis précision/rappel qui justifie le seuil retenu · jeu de test réduit'
  - src: '../screens/mdm-completude-siret.png'
    alt: 'Histogramme comparant la complétude du SIRET avant consolidation, après consolidation en valeur brute, et après consolidation sur les seules lignes rapprochables'
    caption: 'FIG 02 · fiabilisation · complétude du SIRET avant et après, brute et sur lignes rapprochables · jeu de test réduit'
  - src: '../screens/mdm-regles-survivance.png'
    alt: 'Diagramme en barres horizontales des règles de survivance effectivement déclenchées, du consensus jusqu''au meilleur score de géocodage'
    caption: 'FIG 03 · survivance · quelle règle a réellement choisi chaque valeur, comptée sur 4 485 décisions d''attribut · jeu de test réduit'
---

## Contexte

Un CRM contient la même entreprise plusieurs fois, écrite différemment à chaque fois : accents perdus à l'import, `BD` pour `BOULEVARD`, `S.A.R.L.` pour `SARL`, et le SIRET absent six fois sur dix. Le travail de gestion des données de référence consiste à décider quelle est la bonne valeur, et à pouvoir le justifier champ par champ.

La difficulté d'une démonstration sur ce sujet n'est pas technique, elle est épistémique : **on ne peut pas prouver qu'elle marche**. « J'ai fusionné douze mille doublons » — fusionné par rapport à quoi ? Sans réponse connue, un taux de dédoublonnage n'est qu'un nombre de lignes en moins, et un modèle trop agressif produit exactement le même nombre qu'un bon modèle.

J'ai donc renversé le problème. Plutôt que de chercher un jeu de données sale, j'en fabrique un : j'échantillonne des établissements réels du répertoire Sirene, je les duplique, je les dégrade avec des opérateurs dont je contrôle les taux, et je conserve la réponse à part. Chaque chiffre publié ici est mesuré contre cette réponse.

## Mon rôle

Tout, comme pour la plateforme de gouvernance : spécification, conception du modèle de rapprochement, implémentation, documents de gouvernance, et l'évaluation elle-même — c'est-à-dire le rôle qu'une organisation confie normalement à un data steward et celui qu'elle confie à un data engineer, tenus par la même personne. C'est aussi pourquoi la quarantaine de la vérité terrain est vérifiée par un test plutôt que par ma discipline : quand on écrit à la fois le modèle et son examen, l'étanchéité ne peut pas reposer sur la bonne foi.

## Démarche

1. **Fabriquer le désordre avant de le nettoyer.** Neuf opérateurs de corruption, chacun une fonction pure testée séparément : fautes de frappe sur touches adjacentes d'un clavier AZERTY, perte d'accents, abréviations de type de voie, variantes de forme juridique, SIRET absent, faux ou transposé, sept mises en forme de téléphone. Les taux obtenus sont comparés à ceux configurés à chaque exécution.
2. **Normaliser les deux côtés avec les mêmes fonctions.** Le référentiel et le CRM passent par le même code et le même service de géocodage. Une asymétrie ici se manifesterait en aval comme un non-rapprochement qu'aucun entraînement ne rattrape — et resterait invisible : le modèle paraîtrait simplement médiocre.
3. **Rapprocher en deux passes.** D'abord le déterministe : un SIRET dont la clé de Luhn est correcte et qui existe au répertoire se rapproche gratuitement. Ensuite le probabiliste, sur ce qui reste. Les paires de la première passe servent de garde-fou au modèle de la seconde — ce sont des exemples étiquetés obtenus sans consulter la réponse.
4. **Faire survivre les valeurs par règle, pas par préséance de table.** Chaque attribut a sa liste ordonnée de règles ; la première qui départage l'emporte et son nom est journalisé.
5. **Rendre la bande de revue arbitrable.** Entre 0,50 et 0,85, le modèle n'est ni assez sûr pour fusionner ni assez sûr pour rejeter. Une console met les champs en regard et enregistre la décision, qui est ensuite rejouable.

## Décisions de gouvernance

- **La vérité terrain est isolée physiquement, pas par convention.** Elle vit dans un fichier séparé, son chemin n'est écrit que dans un module, et un test analyse l'arbre syntaxique de chaque fichier du projet pour échouer si un autre l'importe. Une consigne « ne lisez pas cette table » ne survit pas à une refonte et ne se vérifie pas ; celle-ci est une ligne rouge dans l'intégration continue.
- **Le CRM synthétique n'est tiré que de lignes en diffusion publique.** L'Insee publie certains établissements en diffusion partielle : leurs responsables se sont opposés à la rediffusion. La plateforme de gouvernance les charge puis les masque ; ici je ne les charge pas du tout, parce que ce projet *dérive* des enregistrements de ces lignes. Fabriquer des clients fictifs à partir de données dont quelqu'un a demandé la non-diffusion serait indéfendable, aussi synthétique que soit le résultat. Filtrer à la source rend la chose impossible plutôt que seulement interdite.
- **Un SIRET faux vaut moins que pas de SIRET.** Un identifiant dont la clé de contrôle échoue n'est pas conservé comme identifiant : il produirait un rapprochement déterministe erroné, c'est-à-dire une erreur avec l'apparence d'une certitude.
- **Un rejet du steward est appliqué avant le regroupement, pas après.** Le regroupement est transitif : une paire rejetée puis recollée par un tiers ferait de l'arbitrage humain une décoration. Couper l'arête d'abord est la seule façon que le refus veuille dire quelque chose.
- **Le seuil retenu n'est pas l'optimum de F1, et c'est écrit.** Le maximum se situe à 0,90 sur le jeu de test ; je retiens 0,85, qui alimente une bande de revue plus large. Un seuil choisi pour maximiser une métrique sur son propre jeu de mesure est un seuil surajusté.

## Résultat

F1 de **0,977** au seuil retenu (précision 0,973, rappel 0,981), pureté des grappes à **0,992**, et **0,00 %** de doublons résiduels : 345 enregistrements de référence pour 347 entités réellement distinctes. La complétude du SIRET passe de **60,1 % à 99,5 %** sur les lignes rapprochables. Les 47 lignes de bruit pur — des prospects ne correspondant à aucune entreprise du répertoire — sont **toutes** restées isolées. Deux exécutions depuis un état propre produisent des comptes identiques, et l'intégration continue le vérifie.

Deux résultats ne m'ont pas fait plaisir sur le moment, et sont ceux que je retiens.

Le premier : ma première version plafonnait à F1 0,787, et j'ai cru à un problème de seuil. Le rappel était pourtant **plat à 0,947 sur toute la plage de 0,50 à 0,90** — or un rappel qui ne bouge pas quand on baisse le seuil ne dit pas « le seuil est mal réglé », il dit « ces paires ne sont jamais notées ». Le défaut était en amont, dans les règles de blocage. Vingt paires vraies n'atteignaient jamais le modèle. Aucun réglage de seuil ne les aurait ramenées.

Le second : je comparais les adresses par distance d'édition sur la ligne entière, ce qui note `12 RUE DE RIVOLI` et `18 RUE DE RIVOLI` à une édition l'une de l'autre — deux immeubles différents comptés comme la même adresse. Séparer le numéro, comparé exactement, de la voie, comparée approximativement, a fait passer le F1 de 0,787 à 0,971. Une seule hypothèse fausse sur un champ coûtait trente points de précision.

Il reste un chiffre que je ne cherche pas à maximiser. La complétude brute du SIRET plafonne à 89,6 %, et c'est normal : dix pour cent des lignes n'ont aucune contrepartie au répertoire. Leur attribuer un SIRET serait une faute — précisément celle que mesure la ligne du dessus, à cent pour cent. Un bon indicateur de qualité n'est pas un indicateur qu'on pousse vers un.

Le code est public : [github.com/AbdouSadou/referentiel-entreprises-mdm](https://github.com/AbdouSadou/referentiel-entreprises-mdm). `make demo-small` rejoue toute la chaîne hors ligne en une minute, sur des jeux de test synthétiques, et écrit le rapport qui produit les figures ci-dessus.
