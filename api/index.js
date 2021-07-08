const { Op } = require('sequelize');  //traigo la parte de Op que me permite hacer querys avanzadazs
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

const getBookById = async (id) => {
    const book = await db.libro.findByPk(id, {include: db.autor}) // es un where mas directo, dame este libro que tiene este id
        .then(result => {                   // busca por primary Key
            return result
        });
return book;
}
// recibo el termino de busqueda que inserto el usuario en el formulario y lo guardo
const findBookByTitle = async (query) => {
    const books = await db.libro.findAll({
        where:{
            titulo: {
                [Op.substring]: query   //[Op.substring] es igual a LIKE = '%dato'
            }
        },
        include: db.autor
    }).then(result => {
        return result;
    })
    return books;
}


const getAuthors = async () => {  //guardo en variables funciones,para despues llamarlas 
    //promesa
    //getBooks es una funcion, si la guardo en una variable puedop exportarla

    //{include: db.autor} para traer lo datos del autor
const author = await db.autor.findAll({include:db.libro})    //llamada a la BD
.then(result => {
return result;          // exporto los datos de la tabla
});

return author;
}  

const addBook = async (titulo, precio, autorId, portada) =>{    // orden del formulario
    const book = await db.libro.create({
        titulo,
        precio,
        portada,
        autorId    //respetamos el orden de la tabla
    });
    return book;
}

//creamos la funcion para ELIMINAR libros por ID
const deleteBookById = async (idLibro) => {
    const book = await db.libro.destroy({
        where: {
           id: idLibro  // el swegundo id es el que viene de la funcion 
        
        }
    });
    return book;
}



module.exports = {
getAuthors, getBooks, getBookById, findBookByTitle, addBook, deleteBookById
}