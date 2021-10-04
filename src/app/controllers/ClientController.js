const Client = require('../models/Client');

class ClientController {
  async create(req, res) {
    const { name, gender, birthdate, age, cityWhereLive } = req.body;

    const client = await Client.create({ name, gender, birthdate, age, cityWhereLive });

    return res.json(client);
  }

  async getByName(req, res) {
    const { name } = req.query;

    const client = await Client.find({ name });

    return res.json(client);
  }

  async getByID(req, res) {
    const { id } = req.params;

    const client = await Client.findById(id);

    if (client !== null) {
      return res.json(client);
    }

    return res.status(204).json({});
    
  }

  async delete(req, res) {
    const { id } = req.params;

    await Client.findByIdAndRemove(id);

    return res.status(204).json({})
  }

  async updates(req, res) {
    const { id } = req.params;
    const { name, gender, birthday, age } = req.body;

    const client = await Client.findOneAndUpdate(
      id,
      { name, gender, birthday, age },
      { new: true }
    );

    return res.json(client);
  }
}

module.exports = new ClientController();
