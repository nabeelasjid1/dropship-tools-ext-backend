const Schema = (sequelize, DataTypes) => {
  const Schema = sequelize.define("links", {
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
    marketplace: {
      type: DataTypes.STRING(),
    },
    link: {
      type: DataTypes.STRING(10000),
    },
  });
  Schema.associate = function (models) {
    Schema.belongsTo(models.catalogs);
  };
  return Schema;
};

export default Schema;
