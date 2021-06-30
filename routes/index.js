var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  //setea las paginas, en este caso / es la principal
  res.render('index', { title: 'GATITOS' });  // cuando alguien ingrese a localhost 3000, quiero renderices index
});

router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});

router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});
module.exports = router;
