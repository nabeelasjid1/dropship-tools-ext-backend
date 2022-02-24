import { random } from "lodash";
import { forgetPasswordTemplated } from "../../utils/email-template";
import DB from "../../database";
import { sendEmail } from "../../utils/send-email";

const ForgetPassword = async (req, res) => {
  try {
    const {
      body: { email },
    } = req;
    const user = await DB.users.findOne({ where: { email } });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "email not found" });
    }
    const code = random(100000, 999999);
    await DB.authCodes.destroy({ where: { userId: user.id } });
    await DB.authCodes.create({ userId: user.id, code });
    await sendEmail(
      user.email,
      user.name,
      "Password Recovery",
      forgetPasswordTemplated(user.name, code)
    );
    return res.status(200).json({
      success: true,
      message: "email sent successfully",
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
export default ForgetPassword;
