# Talent Connect

**Talent Connect** est une plateforme de recrutement qui met en relation des employeurs et des candidats. Ce projet a été conçu pour simplifier le processus de candidature, avec des interfaces utilisateur adaptées aux besoins des candidats, des entreprises et des administrateurs.

## Objectifs du projet
- Offrir aux entreprises un espace pour publier et gérer des offres d'emploi.
- Permettre aux candidats de postuler à des offres et suivre l'évolution de leurs candidatures.
- Assurer une gestion simplifiée pour les administrateurs du site.

## Fonctionnalités principales
1. **Tableau de bord candidats** :  
   - Consultation et mise à jour du profil candidat.
   - Visualisation des candidatures et suivi de leur statut (en attente, acceptée, rejetée).
   - Recommandations personnalisées d'offres d'emploi.

2. **Tableau de bord entreprises** :  
   - Publication et gestion des offres d'emploi.
   - Suivi des candidatures soumises à leurs offres.
   - Communication directe avec les candidats sélectionnés.

3. **Tableau de bord administrateur** :  
   - Supervision générale des offres et des candidatures.
   - Gestion des utilisateurs (candidats et entreprises).

## Technologies utilisées

### Backend (Laravel 10)
- **Laravel** : Framework PHP pour le développement backend, utilisé pour gérer la logique métier, les routes, l'authentification et la gestion des données.
- **Laravel Breeze** : Utilisé pour l'authentification et la gestion des utilisateurs.
- **MySQL** : Base de données relationnelle pour stocker les utilisateurs, les offres, les candidatures, etc.
- **Laravel Policies et Gates** : Gestion fine des autorisations d'accès.

### Frontend (React JS & Inertia.js)
- **React JS** : Framework JavaScript pour créer des interfaces utilisateur interactives et dynamiques.
- **Inertia.js** : Assure la communication entre Laravel et React, tout en gardant une structure monolithique.
- **React Bootstrap** : Bibliothèque de composants React pour un design responsive.
- **Bootstrap** : Utilisé pour le style général de l'application.
