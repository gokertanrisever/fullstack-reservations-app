const { Pool } = require('pg');
const pool = new Pool();

const getReservations = async () => {
  const result = await pool.query('SELECT * FROM reservations');
  return result.rows;
}


module.exports = { getReservations };