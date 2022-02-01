const express = require('express');
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');

const RESERVATION_STATUS = {
  0: 'Todo',
  1: 'In progress',
  2: 'Ready',
}

router.get('/', async (req, res) => {
  let result = await db.getReservations();
  if (!result) res.sendStatus(404);
  else res.send(result);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  let result = await db.deleteReservation(id);
  if (result) {
    res.sendStatus(200);
  } else {
    res.status(404).send('Not found');
  }
});

router.post('/', async (req, res) => {
  const { name, status } = req.body;
  const id = uuidv4();
  let result = await db.addReservation(id, name, status);
  res.sendStatus(200);
});

module.exports = router;