const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Proyecto = sequelize.define("Proyecto", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true, 
      },
    },
  }, {
    tableName: "proyectos",
    timestamps: true, 
  });

  return Proyecto;
};
