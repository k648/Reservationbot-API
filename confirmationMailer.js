const nodemailer = require("nodemailer");
require("dotenv").config();
const Reservation = require("./model/reservation");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendConfirmationEmail = async (email, id) => {
  try {
    const reservationDetails = await Reservation.findById(id);
    const htmlContent = `
    <html>
    <html>
    <head>
        <style>
            h1 {
                font-family: Arial, sans-serif; /* Use a clean, sans-serif font */
                color: white;
                font-size: 36px; /* Adjust size as needed */
                position: relative;
                display: inline-block;
                background-color: #232F3E; /* Dark background for the header text */
                padding: 10px; /* Padding to make the background more prominent */
                border-radius: 5px; /* Optional: Adds a slight curve to the background */
            }
            
            h1::after {
                content: "";
                display: block;
                width: 100%;
                height: 5px; /* Adjust thickness of the underline */
                background-color: orange;
                position: absolute;
                bottom: -5px; /* Adjust the distance from the text */
                left: 0;
            }
        </style>
    </head>
    <body>
        <h1>A-Quality Lounge</h1>
        <p>Dear ${reservationDetails.name},</p>
        <p>Thank you for choosing A-Quality! We are pleased to confirm your reservation with us.</p>
        <p>We look forward to providing you with a memorable stay.</p>
        <p>Best regards,</p>
        <p>A-Quality Team</p>
    </body>
</html>



        `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reservation Confirmation",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log("Reservation confirmation email sent successfully");
  } catch (error) {
    console.error("Error sending reservation confirmation email:", error);
    throw error;
  }
};

module.exports = sendConfirmationEmail;
