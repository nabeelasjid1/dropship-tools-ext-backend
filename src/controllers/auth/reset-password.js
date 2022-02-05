import bcrypt from "bcryptjs";

import DB from "../../database";
import { generateTokenResponse } from "../../middlewares/auth";

export const ResetPassword = async (req, res) => {
  try {
    const {
      user: { email },
      body: { password },
    } = req;
    const userPassword = bcrypt.hashSync(password, 10);
    await DB.users.update({ password: userPassword }, { where: { email } });
    const token = generateTokenResponse(req.user);
    return res.status(200).json({
      token,
      user: req.user,
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
export default ResetPassword;
