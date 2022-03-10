const Schema = (sequelize, DataTypes) => {
  const Schema = sequelize.define("catalogs", {
    asin: {
      type: DataTypes.STRING(),
    },
    upc: {
      type: DataTypes.STRING(),
    },
  });
  Schema.associate = function (models) {
    Schema.hasMany(models.indentifiers);
    Schema.hasMany(models.links);
  };
  return Schema;
};

export default Schema;
