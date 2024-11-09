const express = require('express')
const router = express.Router(); // Add parentheses here
const resetPasswordController = require('../controller/resetPassword')
const rateLimit = require('express-rate-limit');

// Rate limiter for password reset requests
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    message: 'Too many password reset requests from this IP, please try again later.',
  });

/**
 * @swagger
 * /api/v1/request-password-reset:
 *   post:
 *     summary: Request a password reset
 *     description: Sends a password reset email to the user with the provided email address.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *     responses:
 *       200:
 *         description: Reset email sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Reset email sent
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found
 *       500:
 *         description: Internal server error
 */








router.post('/request-password-reset',limiter,resetPasswordController.requestPasswordReset)



module.exports = router