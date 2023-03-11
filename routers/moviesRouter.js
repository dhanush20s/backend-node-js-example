const express =require('express');
const moviesRouter = express.Router();


const moviesController = require('../controllers/movies-controller')

moviesRouter.all('/api/movies',(req,res,next) =>{
    console.log('movies related operation',req.params)
    next()
})
moviesRouter.get('/api/movies',moviesController.getMovies)
moviesRouter.get('/api/movies/:id',moviesController.getMoviesById)
moviesRouter.post('/api/movies',moviesController.createMovies)


module.exports = moviesRouter;