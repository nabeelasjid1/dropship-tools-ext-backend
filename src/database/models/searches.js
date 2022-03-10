const Schema = (sequelize, DataTypes) => {
  const Schema = sequelize.define("searches", {
    marketplace: {
      type: DataTypes.STRING(),
    },
    searchLink: {
      type: DataTypes.STRING(10000),
    },
  });
  return Schema;
};

export default Schema;
