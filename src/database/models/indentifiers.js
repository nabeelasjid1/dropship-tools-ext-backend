const Schema = (sequelize, DataTypes) => {
  const Schema = sequelize.define("indentifiers", {
    catalogId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: "catalogs",
          field: "id",
        },
        key: "id",
      },
    },
    type: {
      type: DataTypes.STRING(),
    },
    identifier: {
      type: DataTypes.STRING(),
    },
  });
  Schema.associate = function (models) {
    Schema.belongsTo(models.catalogs);
  };
  return Schema;
};

export default Schema;
