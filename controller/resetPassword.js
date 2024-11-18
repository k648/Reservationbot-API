const User = require("../model/User");
const sendResetEmail = require("../mailer");
const requestPasswordReset = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });
  const token = user.createJWT({});
  user.resetToken = token;
  user.resetTokenExpiration = Date.now() + 3600000;
  await user.save();
  await sendResetEmail(email, token);
  res.status(200).json({ message: "Reset email sent" });
};

module.exports = {
  requestPasswordReset,
};
