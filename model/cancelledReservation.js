const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     CancelledReservation:
 *       type: object
 *       properties:
 *         phoneNumber:
 *           type: string
 *           description: The phone number of the guest who cancelled the reservation
 *           example: "+1234567890"
 *         step:
 *           type: number
 *           description: The current step in the cancellation process
 *           default: 0
 *         name:
 *           type: string
 *           description: The name of the guest who cancelled the reservation
 *           example: "Jane Smith"
 *         checkInDate:
 *           type: string
 *           description: The original check-in date for the reservation
 *           example: "2023-11-10"
 *         suite:
 *           type: string
 *           description: The suite type for the cancelled reservation
 *           example: "Suite"
 *         nights:
 *           type: number
 *           description: The number of nights that were booked
 *           example: 2
 *         comment:
 *           type: string
 *           description: Any comments regarding the cancellation
 *           example: "Cancelled due to personal reasons"
 */

const cancelledReservationSchema = new mongoose.Schema({
  phoneNumber: { type: String },
  step: { type: Number, default: 0 },
  name: String,
  checkInDate: String,
  suite: String,
  nights: Number,
  comment: String,
});

// Remove the period at the end of the model name
module.exports = mongoose.model(
  "CancelledReservation",
  cancelledReservationSchema,
);
