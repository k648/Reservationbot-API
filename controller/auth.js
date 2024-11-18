const User = require("../model/User");
const logger = require("../logging/logger");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser) {
    return res.status(200).json({ msg: "user email address already exist" });
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(200).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    logger.info("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json("user does not exist");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.status(401).json("Invalid Credentials");
  }
  const token = user.createJWT();
  res.status(200).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
