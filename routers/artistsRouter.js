const express =require('express');

const artistsRouter = express.Router();
const artistsController = require('../Controllers/artistController')
artistsRouter.get('/api/artist',artistsController.getArtists)

module.exports = artistsRouter;