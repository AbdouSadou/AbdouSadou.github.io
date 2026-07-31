---
title: 'Inventara'
outcome: 'Un SaaS de gestion des stocks pour l''industrie chimique, livré de bout en bout, en solo, avec la gouvernance intégrée au schéma.'
stack: ['FastAPI', 'Next.js', 'PostgreSQL']
year: '2024–aujourd''hui'
order: 1
screenshots:
  - src: '../screens/inventara-dashboard.png'
    alt: 'Tableau de bord Inventara : valeur du stock, produits en stock, transactions non documentées, lots proches de la péremption et régularisations en attente'
    caption: 'FIG 01 · tableau de bord · valeur du stock, alertes de péremption et de régularisation · données de démonstration'
  - src: '../screens/inventara-movements.png'
    alt: 'Journal des transactions Inventara : entrées, sorties et transferts avec numéros de lot, statut documentaire et état de régularisation par mouvement'
    caption: 'FIG 02 · journal des mouvements · traçabilité par lot et statut documentaire · données de démonstration'
  - src: '../screens/inventara-exports.png'
    alt: 'Page des rapports Inventara : exports CSV des transactions, du stock courant, des lots proches de la péremption et des régularisations en attente'
    caption: 'FIG 03 · exports · lots proches de la péremption et régularisations en attente · données de démonstration'
---

## Contexte

La gestion des stocks dans l'industrie chimique ne pardonne pas : les matières arrivent par lots, les lots expirent, et une erreur de stock est un problème de conformité avant d'être un problème comptable. La plupart des outils de gestion des stocks traitent ces contraintes comme des cas marginaux. Inventara est le produit que j'ai conçu et construit pour cette réalité : un SaaS de gestion des stocks pour l'industrie chimique, du schéma à l'interface.

## Mon rôle

Tout : j'ai conçu, construit et livré le produit seul. Modèle de données, API, interface, et les décisions opérationnelles autour de la sauvegarde et de la restauration.

## Démarche

1. J'ai modélisé d'abord les données de référence (produits, tiers et entrepôts) et arrêté le cycle de vie de chaque entité avant d'écrire la moindre ligne de code applicatif.
2. J'ai construit l'API avec FastAPI sur PostgreSQL, en gardant les règles d'intégrité dans la base de données, là où aucun client ne peut les contourner.
3. J'ai construit l'interface Next.js autour des flux quotidiens : entrées de marchandises, sorties, allocation des lots, historique des mouvements.
4. J'ai testé les contraintes de manière délibérée, en cherchant à casser l'intégrité référentielle avant qu'un utilisateur ne le fasse.
5. J'ai livré de bout en bout, puis continué d'itérer.

## Décisions de gouvernance

- **Des données de référence avec des règles de cycle de vie.** Produits, tiers et entrepôts sont des enregistrements gouvernés : listes de valeurs contrôlées et états de cycle de vie empêchent les doublons et les orphelins qui corrompent silencieusement les données de stock.
- **Une gestion des lots en FEFO.** Chaque lot porte une date d'expiration et l'allocation suit le principe premier expiré, premier sorti ; le système fait respecter la règle que l'on est tenté de contourner.
- **La traçabilité dès la conception.** Les contraintes d'intégrité sont testées et chaque mouvement de stock est journalisé, de sorte que toute quantité affichée à l'écran peut être expliquée par son historique.
- **Des sauvegardes qui font leurs preuves.** Les sauvegardes hors site sont chiffrées et la vérification des restaurations est automatisée : une sauvegarde non testée est un espoir, pas un contrôle.
- **La minimisation des données personnelles.** Le schéma ne stocke que le minimum de données personnelles dont le système a besoin pour fonctionner, et rien de plus.

## Résultat

Inventara est l'un des deux produits data que j'ai conçus, construits et livrés de bout en bout, en solo. La gouvernance n'y est pas un document de politique posé à côté du système ; elle est implémentée dans le schéma, les contraintes et l'exploitation. Inventara est un produit commercial ; son code reste privé.
