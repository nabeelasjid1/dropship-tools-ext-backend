const Schema = (sequelize, DataTypes) => {
  const Schema = sequelize.define("catalogs", {
    identifierType: {
      type: DataTypes.STRING(),
    },
    identifier: {
      type: DataTypes.STRING(),
    },
    isSync: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
    lastUpdatedAt: {
      type: DataTypes.DATE,
      default: new Date()
    },
  });
  Schema.associate = function (models) {
    Schema.hasMany(models.identifiers);
    Schema.hasMany(models.links);
    Schema.hasMany(models.catalogHistory);
  };
  return Schema;
};

export default Schema;
