import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "info.log", level: "info" }),
    // new winston.transports.File({ filename: "combined.log" }),
  ],
});

export const globalMiddleware = (req, res, next) => {
  // ::1 == localhost
  logger.info(
    "request Address - ",
    req.headers["x-forwarded-for"] || req.connection.remoteAddress
  );

  next();
};
