const Searches = (sequelize, DataTypes) => {
  const Searches = sequelize.define("searches", {
    marketplace: {
      type: DataTypes.STRING(),
    },
    searchLink: {
      type: DataTypes.STRING(),
    },
  });
  return Searches;
};

export default Searches;
