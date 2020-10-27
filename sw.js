
// Ciclo de vida del SW

self.addEventListener('install', event => {
  // Descargar assets
  // Creamos un cache
  console.log('SW: Instalando SW!!!');
  // Instalando adicionales
  const instalacion = new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        console.log('Instalaciones terminadas');
        self.skipWaiting();
        resolve();
      }, 1);
    } catch (error) {
      reject(error);
    }
  });
  event.waitUntil(instalacion);
});

// Cuando el SW toma el control de la aplicación
self.addEventListener('activate', event => {
  // Borrar caché viejo
  console.log('SW2: Activo y listo para controlar la app!');
});

// FETCH: Manejo de peticiones HTTP
self.addEventListener('fetch', event => {

  // Aplicar estrategias de cache
  // console.log('SW:', event.request.url);
});

// SYNC: Recuperamos la conexión a internet
self.addEventListener('sync', event => {
  console.log('Conexion a internet recuperada', event);
  console.log(event);
  console.log(event.tag);
});

// PUSH: Manejar las push notifications
self.addEventListener('push', event => {
  console.log('Ha llegado un evento push!');
});