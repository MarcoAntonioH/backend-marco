const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Tecnologia = sequelize.define("Tecnologia", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    nombre: {
      type: DataTypes.STRING(100),
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
    tableName: "tecnologias",
    timestamps: true,
  });

  return Tecnologia;
};
