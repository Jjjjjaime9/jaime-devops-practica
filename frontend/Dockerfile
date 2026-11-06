# nginx sin privilegios: se ejecuta con el usuario "nginx" (no root) y escucha en el 8080
FROM nginxinc/nginx-unprivileged:1.27-alpine

# Dirección de la API a la que nginx reenvía /api/ (en docker-compose, el servicio "api")
ENV API_URL=http://api:8000

# Plantilla de nginx: al arrancar se sustituye ${API_URL} y se genera conf.d/default.conf
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Frontend estático
COPY index.html app.js styles.css /usr/share/nginx/html/
COPY config.docker.js /usr/share/nginx/html/config.js

EXPOSE 8080
