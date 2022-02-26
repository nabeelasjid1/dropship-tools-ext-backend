import bcrypt from "bcryptjs";
import _ from "lodash";
import DB from "../../database";
import { generateTokenResponse } from "../../middlewares/auth";

const ForgetCodeVerify = async (req, res) => {
  try {
    const {
      body: { email, code, password },
    } = req;
    const user = await DB.users.findOne({ where: { email } });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "email not found" });
    }
    const userCode = await DB.authCodes.findOne({ where: { userId: user.id, code } });
    if (userCode) {
      await DB.authCodes.destroy({ where: { userId: user.id } });
      const userPassword = bcrypt.hashSync(password, 10);
      await DB.users.update({ password: userPassword }, { where: { email } });
      const token = generateTokenResponse(user);
      return res.status(200).json({
        success: true,
        token,
        user,
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};
export default ForgetCodeVerify;
