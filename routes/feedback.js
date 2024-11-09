const express = require('express')
const router = express.Router(); // Add parentheses here
const authorizeUser = require('../middleware/authRole')
const feedbackController = require('../controller/feedback')
const auth = require('../middleware/authentication')


/**
 * @swagger
 * /api/v1/feedbacks:
 *   get:
 *     summary: Get all feedbacks
 *     description: Retrieves a list of all feedback entries.
 *     responses:
 *       200:
 *         description: A list of feedback entries
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 feedback:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         example: John Doe
 *                       comments:
 *                         type: string
 *                         example: "Great service!"
 *                       # Add more properties as needed
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/feedback/{name}:
 *   get:
 *     summary: Get feedback by name
 *     description: Retrieves a single feedback entry based on the provided name.
 *     parameters:
 *       - name: name
 *         in: path
 *         required: true
 *         description: Name of the feedback to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single feedback entry
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 singlefeedback:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: John Doe
 *                     comments:
 *                       type: string
 *                       example: "Great service!"
 *                     # Add more properties as needed
 *       404:
 *         description: Feedback not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Feedback not found
 *       500:
 *         description: Internal server error
 */


router.get('/feedbacks' ,auth, feedbackController.getAllFeedbacks)
router.get('/feedback/:name',auth,authorizeUser('admin','superAdmin'),feedbackController.getFeedback)

module.exports = router
