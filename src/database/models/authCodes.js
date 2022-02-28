const AuthCodes = (sequelize, DataTypes) => {
  const AuthCodes = sequelize.define("authCodes", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: "users",
          field: "id",
        },
        key: "id",
      },
    },
    code: {
      type: DataTypes.STRING(100),
    },
  });
  AuthCodes.associate = function (models) {
    AuthCodes.belongsTo(models.users);
  };
  return AuthCodes;
};

export default AuthCodes;
