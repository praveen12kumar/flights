const { statusCodes } = require("http-status-codes");

const info = (req, res) => {
  res.status(statusCodes.OK).json({
    success: true,
    data: {
      name: "Airline Booking System",
      version: "1.0.0",
    },
    error: {},
  });
};

module.exports = {
  info,
};
