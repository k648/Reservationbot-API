// logger.js
const winston = require("winston");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.Console({
      format: isProduction ? winston.format.json() : winston.format.simple(),
    }),
    new winston.transports.File({
      filename: process.env.ERROR_LOG_FILE || "error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: process.env.COMBINED_LOG_FILE || "combined.log",
    }),
  ],
});

module.exports = logger;
