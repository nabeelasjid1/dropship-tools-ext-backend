import _ from "lodash";
import Users from "../../models/users";
import AuthCodes from "../../models/authCodes";
import { generateTokenResponse } from "../../middlewares/auth";

const ForgetCodeVerify = async (req, res) => {
  try {
    const {
      body: { email, token },
    } = req;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json("email not found");
    }
    const code = await AuthCodes.findOne({ user: user._id, token });
    if (code) {
      await AuthCodes.updateMany({ user: user._id }, { isActive: false });
      await Users.updateOne({ email }, { isActive: true });
      const token = generateTokenResponse(user);
      return res.status(200).json({
        token,
        user,
      });
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
export default ForgetCodeVerify;
