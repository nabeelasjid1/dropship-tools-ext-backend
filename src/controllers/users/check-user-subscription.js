import DB from "../../database";

export const ResetPassword = async (req, res) => {
  try {
    const {
      user: { email },
    } = req;

    return res.status(200).json({
      success: true,
      message: "your subscription is upto date",
      email,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message, success: false });
  }
};

export default ResetPassword;
