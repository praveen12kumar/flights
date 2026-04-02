const { AirplaneRepository } = require("../repositories");
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplace = await airplaneRepository.create(data);
    return airplace;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createAirplane,
};
