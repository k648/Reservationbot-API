const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Feedback:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the person providing feedback
 *           example: "Jane Doe"
 *         comment:
 *           type: string
 *           description: The feedback comment
 *           example: "Great service and friendly staff!"
 *         phone:
 *           type: string
 *           description: The phone number of the person providing feedback
 *           example: "+1234567890"
 */



// Define the schema for user feedback
const feedbackSchema = new mongoose.Schema({
  name: String,
  comment: String,
  phone: String,

});


module.exports = mongoose.model('Feedback', feedbackSchema);