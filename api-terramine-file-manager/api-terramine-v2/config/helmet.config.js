// helmet.config.js

const helmet = require('helmet');

module.exports = function configureHelmet(app) {
  app.use(helmet());

  // Configuración de encabezados de caché
  app.use((req, res, next) => {
    // Evita el almacenamiento en caché de los archivos que manejan la lógica de autenticación
    res.set('Cache-Control', 'no-store');
    res.set('Pragma', 'no-cache');
    next();
  });
};
