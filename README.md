# HealthSync

## Description du projet
**HealthSync** est une application web de suivi de santé et de bien-être permettant aux utilisateurs de suivre leurs repas et leurs activités physiques. L’application aide les utilisateurs à suivre et à atteindre leurs objectifs de santé personnalisés en fournissant une vue d’ensemble de leurs habitudes de vie.

### Problématique
Comment créer une plateforme permettant aux utilisateurs de gérer efficacement leurs repas et activités physiques pour une vision unifiée de leur bien-être quotidien ?

## Fonctionnalités principales
- **Suivi des repas** : Interface pour ajouter, consulter et modifier les repas, avec suivi des informations nutritionnelles (calories, date, etc.).
- **Suivi des activités physiques** : Interface pour ajouter et consulter les activités physiques avec des détails comme la durée et les calories brûlées.
- **Interface intuitive et personnalisée** : Sidebar, header et sections spécifiques pour une navigation facile entre les fonctionnalités.

## Technologies utilisées
- **React & TypeScript** : Gestion de l'interface utilisateur et du typage robuste.
- **Zustand** : Gestion globale de l’état de l’application, facilitant le partage des données de santé entre les composants.
- **Axios** : Gestion des appels API, notamment avec les fonctionnalités CRUD des repas.
- **React Router** : Gestion de la navigation pour des pages distinctes (suivi des repas, activités, etc.).
- **Jest & React Testing Library** : Tests unitaires et de composants pour garantir la fiabilité de l’application.

## Installation et exécution

1. Clonez ce dépôt sur votre machine locale :
    ```bash
    git clone https://github.com/votre-compte/HealthSync.git
    ```
2. Accédez au répertoire du projet :
    ```bash
    cd HealthSync
    ```
3. Installez les dépendances nécessaires pour le frontend et le backend :
    ```bash
    npm install
    ```
4. Exécutez l'application :
    
    npm start


L'application sera accessible à l'adresse : http://localhost:3000.


## Structure du projet
- **/frontend** : Projet React (interface utilisateur).
- **/src** : Regroupe les fichiers sources de l’application.
- **/components** : Composants React pour l’interface utilisateur (Sidebar, Header, Suivi des repas, Suivi des activités, etc.).
- **/tests** : Fichiers de tests unitaires et d’intégration utilisant Jest et React Testing Library.

  
## Capture d'écran de l'interface utilisateur
![Capture d'écran - Dashboard](https://github.com/OthmaneB-Pro/HealthSync/raw/main/public/img/HealthSync.PNG)

![Capture d'écran - Repos](https://github.com/OthmaneB-Pro/HealthSync/raw/main/public/img/HealthSyncSleep.PNG)

![Capture d'écran - Suivi des repas](https://github.com/OthmaneB-Pro/HealthSync/raw/main/public/img/HealthSyncRepas.PNG)


## Résultat
HealthSync est une application complète et intuitive permettant aux utilisateurs de suivre leurs données de santé de manière centralisée. Avec des fonctionnalités de synchronisation Google Fit, de gestion des repas et des activités, et un design responsive, HealthSync offre une expérience fluide et optimisée pour une prise en main efficace de la santé quotidienne.
