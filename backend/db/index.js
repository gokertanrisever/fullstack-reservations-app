const { Pool } = require('pg');
const pool = new Pool();

const getReservations = async () => {
  const result = await pool.query('SELECT * FROM reservations');
  return result.rows;
}

const deleteReservation = async (id) => {
  const result = await pool.query('DELETE FROM reservations WHERE id = $1', [id]);
  return result.rows;
};

const addReservation = async (id, name, status) => {
  const result = await pool.query('INSERT INTO reservations (id, name, status) VALUES ($1, $2, $3)', [id, name, status]);
  return result.rows;
};


module.exports = { 
  getReservations,
  deleteReservation,
  addReservation
};