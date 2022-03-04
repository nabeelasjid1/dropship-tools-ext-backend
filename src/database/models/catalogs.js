const Catalogs = (sequelize, DataTypes) => {
  const Catalogs = sequelize.define("catalogs", {
    asin: {
      type: DataTypes.STRING(),
    },
    upc: {
      type: DataTypes.STRING(),
    },
    ean: {
      type: DataTypes.STRING(),
    },
    gtin: {
      type: DataTypes.STRING(),
    },
    walmartLink: {
      type: DataTypes.STRING(),
    },
    ebayLink: {
      type: DataTypes.STRING(),
    },
  });
  return Catalogs;
};

export default Catalogs;
