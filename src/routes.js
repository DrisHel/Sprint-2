const routes = require("express").Router();

const ClientController = require("./app/controllers/ClientController");
const CityController = require("./app/controllers/CityController");

routes.post("/client", ClientController.create);
routes.delete("/client/:id", ClientController.delete);
routes.get("/client/:id", ClientController.getByID);
routes.get("/client", ClientController.getByName);
routes.put("/client/:id", ClientController.updates);

routes.post("/city", CityController.create);
routes.get("/city/name", CityController.getByName);
routes.get("/city/state", CityController.getByState);

module.exports = routes;
