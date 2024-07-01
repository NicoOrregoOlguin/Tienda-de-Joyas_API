const express = require('express');
const bodyParser = require('body-parser');
const joyasRoutes = require('./routes/joyasRoutes.js');
const logger = require('./middlewares/logger.js');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(logger);

// Ruta básica para la raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de My Precious Spa');
});

// Rutas
app.use('/joyas', joyasRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
