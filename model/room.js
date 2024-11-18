// models/Room.js
const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     Room:
 *       type: object
 *       required:
 *         - roomType
 *         - price
 *         - capacity
 *       properties:
 *         roomType:
 *           type: string
 *           description: The type of the room (e.g., Single, Double, Suite)
 *           example: Double
 *         roomNumber:
 *           type: number
 *           description: The  room number (e.g., 1, 2, 3)
 *           example: 10
 *         price:
 *           type: number
 *           description: The price per night for the room
 *           example: 150.00
 *         capacity:
 *           type: number
 *           description: The maximum number of guests that can stay in the room
 *           example: 2
 *         amenities:
 *           type: array
 *           items:
 *             type: string
 *           description: A list of amenities available in the room
 *           example: [ "WiFi", "TV", "Air Conditioning" ]
 *         availability:
 *           type: string
 *           description: The availability status of the room
 *           enum: [booked, available]
 *           default: available
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date when the room was created
 *           example: "2023-11-04T12:34:56Z"
 */

const roomSchema = new mongoose.Schema({
  roomType: { type: String, required: true }, // e.g., Single, Double, Suite
  roomNumber: { type: Number, required: true },
  price: { type: Number, required: true },
  capacity: { type: Number, required: true }, // Number of guests
  amenities: [String],
  availability: {
    type: String,
    enum: ["booked", "available"],
    default: "available",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Room", roomSchema);
