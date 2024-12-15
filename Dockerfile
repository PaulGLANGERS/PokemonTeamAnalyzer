FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json package-lock.json ./
COPY server.js db.js ./
COPY public ./public
COPY data ./data
COPY node_modules ./node_modules

# Installer les dépendances
RUN npm install

# Exposer le port utilisé par l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "server.js"]