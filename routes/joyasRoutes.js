const express = require('express');
const router = express.Router();
const { getJoyas, getJoyasFiltros } = require('../controllers/joyasController.js');

router.get('/', getJoyas);
router.get('/filtros', getJoyasFiltros);

module.exports = router;
