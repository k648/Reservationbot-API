const express = require('express')
const router = express.Router(); // Add parentheses here
const auth = require('../middleware/authentication')
const cancelledReservationController = require('../controller/cancelledReservation')



/**
 * @swagger
 * /api/v1/cancelled-reservation:
 *   get:
 *     summary: Get all cancelled reservations
 *     description: Retrieves a list of all cancelled reservations.
 *     responses:
 *       200:
 *         description: A list of cancelled reservations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: John Doe
 *                   reason:
 *                     type: string
 *                     example: "Change of plans"
 *                   dateCancelled:
 *                     type: string
 *                     format: date
 *                     example: "2024-11-03"
 *                   # Add more properties as needed
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/cancelled-reservation/{name}:
 *   get:
 *     summary: Get a cancelled reservation by name
 *     description: Retrieves a single cancelled reservation based on the provided name.
 *     parameters:
 *       - name: name
 *         in: path
 *         required: true
 *         description: Name of the cancelled reservation to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single cancelled reservation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 singlecancelledreservation:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: John Doe
 *                     reason:
 *                       type: string
 *                       example: "Change of plans"
 *                     dateCancelled:
 *                       type: string
 *                       format: date
 *                       example: "2024-11-03"
 *                     # Add more properties as needed
 *       404:
 *         description: Cancelled reservation not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No cancelled Reservation not found
 *       500:
 *         description: Internal server error
 */



router.get('/cancelled-reservation',auth, cancelledReservationController.getAllCancelledReservations)
router.get('/cancelled-reservation/:name',auth,cancelledReservationController.getCancelledReservation)

module.exports = router