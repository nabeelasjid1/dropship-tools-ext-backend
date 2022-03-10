import bcrypt from "bcryptjs";

const Schema = (sequelize, DataTypes) => {
  const Schema = sequelize.define("users", {
    email: {
      type: DataTypes.STRING(100),
    },
    password: {
      type: DataTypes.STRING(),
    },
  });
  Schema.prototype.validatePassword = function (candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password);
  };
  return Schema;
};

export default Schema;
