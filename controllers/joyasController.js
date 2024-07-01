const pool = require('../db/pool.js');

const getJoyas = async (req, res) => {
  const { limits, page, order_by } = req.query;
  try {
    const offset = (page - 1) * limits;
    const order = order_by.split('_');
    const result = await pool.query(
      `SELECT * FROM inventario ORDER BY ${order[0]} ${order[1]} LIMIT $1 OFFSET $2`,
      [limits, offset]
    );

    const totalJoyas = await pool.query('SELECT COUNT(*) FROM inventario');
    res.json({
      totalJoyas: parseInt(totalJoyas.rows[0].count),
      stockTotal: result.rows.reduce((acc, curr) => acc + curr.stock, 0),
      results: result.rows.map(joya => ({
        name: joya.nombre,
        href: `/joyas/joya/${joya.id}`,
      })),
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en la consulta');
  }
};

const getJoyasFiltros = async (req, res) => {
  const { precio_min, precio_max, categoria, metal } = req.query;
  try {
    const result = await pool.query(
      'SELECT * FROM inventario WHERE precio >= $1 AND precio <= $2 AND categoria = $3 AND metal = $4',
      [precio_min, precio_max, categoria, metal]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en la consulta');
  }
};

module.exports = {
  getJoyas,
  getJoyasFiltros
};
