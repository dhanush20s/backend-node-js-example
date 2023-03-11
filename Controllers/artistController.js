const artist = require('../data/artist')

const getArtists = (req,res)=>{
    res.send(artist)
}
module.exports={
    getArtists
}