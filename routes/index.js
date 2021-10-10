const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini messageboard', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'Mini messageboard' });
});

router.post('/new', (req, res, next) => {
  const { text, user } = req.body;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect('/');
});

module.exports = router;
