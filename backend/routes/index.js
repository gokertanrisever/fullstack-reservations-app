const express = require('express');
const router = express.Router();
const db = require('../db');

const RESERVATION_STATUS = {
  0: 'Todo',
  1: 'In progress',
  2: 'Ready',
}

const RESERVATIONS = [
  {
    id: 1,
    name: 'Foo',
    status: 0,
  }
]

router.get('/', async (req, res) => {
  let result = await db.getReservations();
  if (!result) res.sendStatus(404);
  else res.send(result);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const reservation = RESERVATIONS.find(r => r.id == id);
  if (reservation) {
    reservation.status = 2;
    res.sendStatus(200);
  } else {
    res.status(404).send('Not found');
  }
})

module.exports = router;