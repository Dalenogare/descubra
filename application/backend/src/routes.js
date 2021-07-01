const express = require('express');
const UserController = require('./controllers/UserController')
const EstablishmentController = require('./controllers/EstablishmentController')
// const TechController = require('./controllers/TechController')
// const ReportController = require('./controllers/ReportController')

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.delete('/users/:id/', UserController.delete);

routes.post('/users/:user_id/establishments', EstablishmentController.store)
routes.get('/users/:user_id/establishments', EstablishmentController.index)

//routes.post('/items/:user_id/techs', TechController.store)
// routes.get('/establishments/:', TechController.index)
// routes.delete('/users/:user_id/techs', TechController.delete)

// routes.get('/report', ReportController.show)

module.exports = routes;