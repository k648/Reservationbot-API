const express = require('express');
const router = express.Router();
const auth = require('../middleware/authentication');
const roomController = require('../controller/room');

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
 * /api/v1/rooms/{roomNumber}:
 *   get:
 *     summary: Get room details by room number
 *     description: Retrieves a room by its number (e.g., 10, 11) and returns room details such as price, capacity, amenities, and availability.
 *     parameters:
 *       - in: path
 *         name: roomNumber
 *         required: true
 *         description: The number of the room to retrieve (e.g., 10, 11, etc.)
 *         schema:
 *           type: integer  # Corrected from 'Number' to 'integer'
 *           example: 10
 *     responses:
 *       200:
 *         description: Successfully retrieved room details
 *       404:
 *         description: Room not found for the specified number
 *       500:
 *         description: Internal server error
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
router.post('/room', auth, roomController.Roomcreated);
router.patch('/room/:id', auth, roomController.updateRoom);  
router.get('/rooms/:availability', auth, roomController.getRoomByAvalaibility);  
router.get('/rooms/:roomNumber', auth, roomController.getroombyNumber);  
router.get('/rooms', auth, roomController.getAllRoom);

module.exports = router;
