const express = require('express');
const UserController = require('./controllers/UserController')
const EstablishmentController = require('./controllers/EstablishmentController')
const ItemController = require('./controllers/ItemController')
// const TechController = require('./controllers/TechController')
// const ReportController = require('./controllers/ReportController')

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.delete('/users/:id/', UserController.delete);

routes.post('/users/:user_id/establishment', EstablishmentController.store)
routes.get('/users/:user_id/establishment', EstablishmentController.userEstablishment)
routes.get('/establishments', EstablishmentController.index)

routes.post('/establishments/:establishment_id/items', ItemController.store)
routes.get('/establishments/:establishment_id/items', ItemController.establishmentItems)
routes.get('/items', ItemController.index)

//routes.post('/items/:user_id/techs', TechController.store)
// routes.get('/establishments/:', TechController.index)
// routes.delete('/users/:user_id/techs', TechController.delete)

// routes.get('/report', ReportController.show)

module.exports = routes;