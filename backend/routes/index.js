const express = require('express');
const router = express.Router();

const RESERVATION_STATUS = {
  0: 'Todo',
  1: 'In progress',
  2: 'Ready',
}

const RESERVATIONS = [
  {
    id: 1,
    name: 'Foo',
    store: 'Test',
    status: 0,
  }
]

router.get('/', (req, res) => {
  console.log('requested')
  res.json(RESERVATIONS);
})

module.exports = router;