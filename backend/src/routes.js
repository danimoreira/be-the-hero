const express = require('express');

const routes = express.Router();

const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

//LOGIN
routes.post('/sessions', sessionController.create);

// ONGS
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

// INCIDENTS
routes.post('/incidents', incidentsController.create);
routes.get('/incidents', incidentsController.list);
routes.delete('/incidents/:id', incidentsController.delete);

//PROFILE
routes.get('/profile', profileController.list);

module.exports = routes;