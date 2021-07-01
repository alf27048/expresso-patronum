module.exports = (sequelize, DataTypes) => {    //genero un paquete para importar, Dataty viene con secualize

    const Autor = sequelize.define('autor',{
        id: {                       //creo elcampo ID
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        nombreCompleto: DataTypes.STRING(100)    //tipo de datos

    },
    {
        freezeTableName: true,
        timestamps: false
    });
    Autor.associate = (models) => {
        Autor.hasMany(models.libro);
    };   //creo una tabla autor

    return Autor; // devuelve la table Autor, devuelve la tabla "autor" en nuestro proyecto
}