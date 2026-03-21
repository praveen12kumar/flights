const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");

/**
 * POST: /airplanes
 * req-body {modelNumber, capacity}
 */

async function createAirplane(req, res) {
  try {
    const data = req.body;
    const airplane = await AirplaneService.createAirplane({
      modelNumber: data.modelNumber,
      capacity: data.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Sccessfully created airplane",
      data: airplane,
      error: {},
    });
  } catch (error) {
    res.status(StatusCodes.SOMETHING_WENT_WRONG).json({
      success: false,
      message: "Failed to create airplane",
      data: {},
      error: error.message,
    });
  }
}

module.exports = { createAirplane };
