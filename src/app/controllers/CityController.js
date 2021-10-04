const City = require('../models/City');

class CityController {
  async create(req, res) {
    const { name, state } = req.body;

    const city = await City.create({ name, state });

    return res.json(city);
  }

  async getByName(req, res) {
    const { name } = req.query;

    const city = await City.find({ name });

    return res.json(city);
  }

  async getByState(req, res) {
    const { state } = req.query;

    const city = await City.find({ state });

    return res.json(city);
  }
}

module.exports = new CityController();
