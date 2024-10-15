# Étape 1 : Utiliser une image Node.js comme base pour construire l'application
FROM node:16 AS build

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier les fichiers de configuration (package.json et package-lock.json)
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier le reste des fichiers de l'application
COPY . .

# Étape 6 : Construire l'application pour la production
RUN npm run build

# Étape 7 : Utiliser une image Nginx pour servir l'application (images finales)
FROM nginx:alpine

# Étape 8 : Copier les fichiers de build générés par React dans le répertoire de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Étape 9 : Exposer le port 80 pour permettre l'accès à l'application
EXPOSE 80

# Étape 10 : Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
