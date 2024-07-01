const logger = (req, res, next) => {
    console.log(`Ruta consultada: ${req.url}`);
    next();
  };
  
  module.exports = logger;
  