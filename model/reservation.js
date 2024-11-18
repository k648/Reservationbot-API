const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     Session:
 *       type: object
 *       properties:
 *         phoneNumber:
 *           type: string
 *           description: The phone number of the guest
 *           example: "+1234567890"
 *         step:
 *           type: number
 *           description: The current step in the booking process
 *           default: 0
 *         name:
 *           type: string
 *           description: The name of the guest
 *           example: "John Doe"
 *         checkInDate:
 *           type: string
 *           description: The date the guest intends to check in
 *           example: "2023-11-10"
 *         suite:
 *           type: string
 *           description: The suite type the guest has chosen
 *           example: "Suite"
 *         nights:
 *           type: number
 *           description: The number of nights for the stay
 *           example: 3
 *         comment:
 *           type: string
 *           description: Any additional comments from the guest
 *           example: "Requesting a late check-in"
 *         status:
 *           type: string
 *           description: The current status of the booking session
 *           enum: [pending, confirmed]
 *           default: pending
 */

const sessionSchema = new mongoose.Schema({
  phoneNumber: { type: String },
  step: { type: Number, default: 0 },
  name: String,
  checkInDate: String,
  suite: String,
  nights: Number,
  comment: String,
  status: {
    type: String,
    enum: ["pending", "confirmed"],
    default: "pending",
  },
});

module.exports = mongoose.model("Session", sessionSchema);
