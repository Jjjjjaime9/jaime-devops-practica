// Configuración del frontend dentro del contenedor Docker.
// nginx reenvía /api/ al contenedor de la API (proxy inverso), así que la página
// usa su mismo origen: http://localhost:8080/api/productos -> http://api:8000/productos
window.TIENDA_CONFIG = { apiUrl: location.origin + "/api" };
