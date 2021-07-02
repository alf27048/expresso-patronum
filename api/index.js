const db = require('../models');    //traemos los medelos

const getBooks = async () => {  //guardo en variables funciones,para despues llamarlas 
                                //promesa
                                //getBooks es una funcion, si la guardo en una variable puedop exportarla
    const books = await db.libro.findAll()    //llamada a la BD
        .then(result => {
            return result;          // exporto los datos de la tabla
        });

    return books;
}  


const getAuthor = async () => {  //guardo en variables funciones,para despues llamarlas 
    //promesa
    //getBooks es una funcion, si la guardo en una variable puedop exportarla
const author = await db.autor.findAll()    //llamada a la BD
.then(result => {
return result;          // exporto los datos de la tabla
});

return author;
}  
module.exports = {
getAuthor, getBooks
}