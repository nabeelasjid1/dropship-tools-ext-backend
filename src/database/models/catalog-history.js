const Schema = (sequelize, DataTypes) => {
  const Schema = sequelize.define("catalogHistory", {
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
    productRank: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    bundleQuantity: {
      type: DataTypes.INTEGER,
    },
    syncedAt: {
      type: DataTypes.DATE,
    },
  });
  Schema.associate = function (models) {
    Schema.belongsTo(models.catalogs);
  };
  return Schema;
};

export default Schema;
