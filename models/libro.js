module.exports = (sequelize, DataTypes) => {
    const Libro = sequelize.define('libro', {
        id: {                       //creo elcampo ID
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        titulo: DataTypes.STRING(200),
        precio: DataTypes.INTEGER,
        portada: DataTypes.STRING(150) // portada del libro, imagen

    },
    {
        freezeTableName: true,
        timestamps: false
    });
    Libro.associate = (models) => {
        Libro.belongsTo(models.autor);
    };      
    return Libro;
}