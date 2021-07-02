var express = require('express');
var router = express.Router();
const api = require('../api');  //guardo en variables funciones,para despues llamarlas 


/* GET home page. */
router.get('/', async (req, res) => {
  const books = await api.getBooks();
  console.log(books);

  //res.render('index', { title: 'Gatitos' });

  // Devuelve un JSON con  la informacion
  res.send(books);
});


router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});

router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});
module.exports = router;
