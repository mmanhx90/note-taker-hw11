const router = require('express').Router();
const data = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
  res.json(data);
});

router.post('/api/notes', (req, res) => {
  const {title, text} = req.body;
  const newNote = {
    title, 
    text, 
    id: uuidv4(),
  };
  data.push(newNote);
  console.log(data);
  fs.writeFileSync('./db/db.json', JSON.stringify(data));
  res.json(data);
});

module.exports = router;