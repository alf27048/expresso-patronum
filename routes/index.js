var express = require('express');
var router = express.Router();
const api = require('../api');  //guardo en variables funciones,para despues llamarlas 


/* GET home page. */
router.get('/', async (req, res) => {
  const books = await api.getBooks();
  console.log(books);

  res.render('index', { title: 'Libreria', books });  // para mandar la info en ejs

  // Devuelve un JSON con  la informacion
  //res.send(books);
});

/* router.get('/libro/:id', async (req, res) => {
  //console.log(req.params);
  const book = await api.getBookById(req.params.id);
// views/pages/libro.ejs
//aca mostramos, titulo completo, nombre autor y precio
//res.render(....libro.ejs y le enviamos la data de book)
  res.render('pages/libro', { book });

 // res.send(`Vas bien!, el Id que buscas es ${req.params.id}`);
 res.send(book);
});*/

router.get('/libro/:id', async (req, res) => {
  // Los datos de la URL vienen en req.params
  const book = await api.getBookById(req.params.id);
  res.render('pages/libro', { book });
});


router.get('/autores', async (req, res) => {
  const author = await api.getAuthor();
  console.log(author);
  res.send(author);
  //res.render('pages/autores');
});

router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});

router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});
module.exports = router;
