import bcrypt from "bcryptjs";

const Users = (sequelize, DataTypes) => {
  const Users = sequelize.define("users", {
    name: {
      type: DataTypes.STRING(),
    },
    email: {
      type: DataTypes.STRING(100),
    },
    password: {
      type: DataTypes.STRING(),
    },
  });
  Users.prototype.validatePassword = function (candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password);
  };
  return Users;
};

export default Users;
