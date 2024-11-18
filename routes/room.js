const express = require("express");
const router = express.Router();
const auth = require("../middleware/authentication");
const roomController = require("../controller/room");

/**
 * @swagger
 * /api/v1/room:
 *   post:
 *     summary: Create a new room
 *     description: Adds a new room with specified details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomType:
 *                 type: string
 *                 example: Deluxe
 *               roomNumber:
 *                 type: number
 *                 example: 10
 *               price:
 *                 type: number
 *                 example: 150
 *               capacity:
 *                 type: number
 *                 example: 2
 *               amenities:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["WiFi", "TV", "Mini Bar"]
 *               availability:
 *                 type: string
 *                 example: available
 *     responses:
 *       201:
 *         description: Room created successfully
 *       400:
 *         description: Bad request (e.g., validation errors)
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /api/v1/room:
 *   get:
 *     summary: Retrieve room information by room number
 *     description: Fetches the details of a specific room based on the provided room number.
 *     parameters:
 *       - in: query
 *         name: roomNumber
 *         required: true
 *         schema:
 *           type: integer
 *           example: 10
 *         description: The number of the room to retrieve.
 *     responses:
 *       200:
 *         description: Room details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 findRoom:
 *                   type: object
 *                   description: Details of the requested room
 *                   example: 
 *                     roomType: Deluxe
 *                     roomNumber: 10
 *                     price: 150
 *                     capacity: 2
 *                     amenities: ["WiFi", "TV", "Mini Bar"]
 *                     availability: available
 *       400:
 *         description: Bad request (e.g., missing or invalid room number)
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Room number is required"
 *       404:
 *         description: Room not found
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Room number not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Internal server error"
 */

/**
 * @swagger
 * /api/v1/rooms/by-type:
 *   post:
 *     summary: Get rooms by type
 *     description: Retrieves all rooms that match the specified room type and returns details such as price, capacity, amenities, and availability.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomType:
 *                 type: string
 *                 description: The type of room to search for (e.g., "Executive").
 *                 example: Executive
 *     responses:
 *       200:
 *         description: Successfully retrieved rooms matching the specified type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 getRoom:
 *                   type: array
 *                   description: A list of rooms matching the given type.
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The unique ID of the room.
 *                       roomType:
 *                         type: string
 *                         description: The type of the room.
 *                       roomNumber:
 *                         type: integer
 *                         description: The room number.
 *                       price:
 *                         type: number
 *                         format: float
 *                         description: The price of the room.
 *                       capacity:
 *                         type: integer
 *                         description: The capacity of the room.
 *                       amenities:
 *                         type: array
 *                         description: The amenities of the room.
 *                         items:
 *                           type: string
 *                       availability:
 *                         type: string
 *                         description: The availability status of the room.
 *       400:
 *         description: Bad Request - Room type not provided
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Room type is required
 *       404:
 *         description: No rooms found for the given type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No room found for the given type
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */


/**
 * @swagger
 * /api/v1/rooms/{availability}:
 *   get:
 *     summary: Get rooms by availability
 *     description: Retrieves a list of rooms filtered by their availability status (e.g., available, booked).
 *     parameters:
 *       - in: path
 *         name: availability
 *         required: true
 *         description: Availability status to filter rooms by
 *         schema:
 *           type: string
 *           enum: [available, booked]
 *           example: available
 *     responses:
 *       200:
 *         description: Successfully retrieved rooms based on availability
 *       404:
 *         description: No rooms found with the specified availability status
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/room/{id}:
 *   patch:
 *     summary: Update an existing room
 *     description: Updates the details of a room based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the room to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               availability:
 *                 type: string
 *                 example: booked
 *     responses:
 *       200:
 *         description: Room updated successfully
 *       400:
 *         description: Bad request (e.g., validation errors)
 *       404:
 *         description: Room not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/rooms:
 *   get:
 *     summary: Get all rooms
 *     description: Retrieves a list of all available rooms.
 *     responses:
 *       200:
 *         description: A list of rooms
 *       500:
 *         description: Internal server error
 */

// Routes
router.post("/room", auth, roomController.Roomcreated);
router.patch("/room/:id", auth, roomController.updateRoom);
router.get("/rooms/:availability", auth, roomController.getRoomByAvalaibility);
router.get("/rooms", auth, roomController.getAllRoom);
router.post("/rooms/by-type", auth, roomController.getRoomByType);
router.get("/room", auth, roomController.getRoomByNumber);

module.exports = router;
