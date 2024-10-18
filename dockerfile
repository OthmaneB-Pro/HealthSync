# Utilise une image Node.js comme base
FROM node:14

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet dans le conteneur
COPY . .

# Exposer le port sur lequel l'application va fonctionner
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
