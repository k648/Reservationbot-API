const express = require("express");
const router = express.Router(); // Add parentheses here
const auth = require("../middleware/authentication");
const reservationController = require("../controller/reservation");

/**
 * @swagger
 * /api/v1/reservation:
 *   get:
 *     summary: Get all reservations
 *     description: Retrieves a list of all reservations.
 *     responses:
 *       200:
 *         description: A list of reservations
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reservations:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         example: John Doe
 *                       # Add more properties as needed
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /api/v1/reservation/{name}:
 *   get:
 *     summary: Get a reservation by name
 *     description: Retrieves the details of an existing reservation using the reservation name.
 *     parameters:
 *       - name: name
 *         in: path
 *         required: true
 *         description: Name of the reservation to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved reservation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "John Doe"
 *                 status:
 *                   type: string
 *                   example: "confirmed"
 *                 date:
 *                   type: string
 *                   example: "2024-11-06T12:00:00Z"
 *                 # Add more properties as needed for the reservation
 *       404:
 *         description: Reservation not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Reservation not found"
 *       400:
 *         description: Bad request (e.g., validation errors)
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/reservation/{id}:
 *   patch:
 *     summary: Update a pending reservation
 *     description: Updates the details of an existing reservation.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the reservation to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: confirmed
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               # Define other properties that can be updated
 *     responses:
 *       200:
 *         description: Updated reservation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: confirmed
 *                 email:
 *                   type: string
 *                   example: user@example.com
 *                 # Add more properties as needed for the updated reservation
 *       404:
 *         description: Reservation not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Reservation not found
 *       400:
 *         description: Bad request (e.g., validation errors)
 *       500:
 *         description: Internal server error
 */

router.get("/reservation", auth, reservationController.getAllReservation);
router.get("/reservation/:name", auth, reservationController.getReservation);
router.patch("/reservation/:id", auth, reservationController.updateReservation);

module.exports = router;
