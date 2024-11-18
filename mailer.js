const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendResetEmail = (email, token) => {
  const resetLink = `http://localhost:${process.env.PORT}/reset-password/${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset",
    html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  };

  return transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log("Password reset email sent successfully");
    })
    .catch((error) => {
      console.error("Error sending password reset email:", error);
      throw error;
    });
};

module.exports = sendResetEmail;
