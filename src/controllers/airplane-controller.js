const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

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
    SuccessResponse.data = airplane;
    SuccessResponse.message = "Sccessfully created airplane";

    res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Failed to create airplane";
    ErrorResponse.error = error;
    res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
}

module.exports = { createAirplane };
