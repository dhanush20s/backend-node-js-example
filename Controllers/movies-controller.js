const movies = require('../data/movies')

const getMovies = (req,res) =>{
    res.json(movies)
}

const getMoviesById = (req,res) =>{
    const id = req.params.id
    const movie = movies.find(m => {
        return m.id == id
    })
    res.json(movie)
}
const createMovies = (req,res)=>{
    const movie =req.body
    console.log(movie)
    // const lastMovie = movies[movies.length - 1]
    // let newId = lastMovie.id
    // newId++
    // movie.id = newId
    const newId = movies.map(m => m.id)
    let maxId = Math.max(...newId)
    movie.id=maxId + 1

    movies.push(movie)
    res.json(movie)
     
}

module.exports = {
    getMovies,
    getMoviesById,
    createMovies,
}