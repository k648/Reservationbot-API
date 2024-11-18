const express = require("express");

const router = express.Router();

const { register, login } = require("../controller/auth");

/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary:
 *     description: Creates a new user and returns a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: mysecurepassword
 *     responses:
 *       200:
 *         description: Successfully registered user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: John Doe
 *                 token:
 *                   type: string
 *                   example: your_jwt_token_here
 *       400:
 *         description: Bad request (e.g., validation errors)
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary:
 *     description: Authenticates a user and returns a JWT token.
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
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: mysecurepassword
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: John Doe
 *                 token:
 *                   type: string
 *                   example: your_jwt_token_here
 *       400:
 *         description: Bad request (e.g., missing email or password)
 *       404:
 *         description: User not found
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */

router.post("/register", register);
router.post("/login", login);

module.exports = router;
