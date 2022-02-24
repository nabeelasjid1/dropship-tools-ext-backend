import { generateTokenResponse } from "../../middlewares/auth";

const SignIn = async (req, res) => {
  try {
    if (req.error)
      return res.status(401).json({ message: req.error, success: false });
    const token = generateTokenResponse(req.user);
    return res.status(200).json({
      success: true,
      token,
      user: req.user,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};
export default SignIn;
