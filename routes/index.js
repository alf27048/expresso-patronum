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

// buscar
router.get('/buscar', async (req, res) => {
  // Los datos de la URL vienen en req.params
  // const n findBooksByTitle????
  const books = await api.findBookByTitle(req.query.query);
  res.render('index', {title: 'Resultado de busqueda', books});
});
// agregar libro
router.get('/agregar', async (req, res) => {
  // conseguir el listado de autores y pasarlo al render
  const autores = await api.getAuthors();
  
  res.render('pages/agregar', { autores });
});
//creamos la ruta a traves del metodo POST para q se actibe con el formulario de /agregar

router.post('/agregar_proceso', async (req, res) => { //esa ruta no acepta un metodo get, se ingresa atraves del formulario
  // "destructuracion objetos": crear variables a partir de los objetos
  const { titulo, precio, autor, portada } = req.body;  // respetar los name de los labels
 
  // es igual a hacer uno por uno
  //const titulo = req.body.titulo;
  //const titulo = req.body.precio;
  await api.addBook(titulo, precio, autor, portada); //respetar  el orden

  res.send(book);  //trae la info del formulario
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
