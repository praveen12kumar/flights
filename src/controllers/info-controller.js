const infoController = (req, res) => {
  res.json({
    success: true,
    data: {
      name: "Airline Booking System",
      version: "1.0.0",
    },
    error: {},
  });
};

module.exports = infoController;
