FROM nginx:stable

# Définir le répertoire de travail de Nginx
WORKDIR /usr/share/nginx/html/css

# Copier les fichiers CSS dans le conteneur
COPY . .

# Exposer le port par défaut de Nginx
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]