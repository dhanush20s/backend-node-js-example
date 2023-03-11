const express =require('express');
const fakeRouter = express.Router();
const axios = require('axios')

fakeRouter.get('/api/fake',(req,res)=>{
    const fakeurl='https://jsonplaceholder.typicode.com/posts'
    axios.get(fakeurl)
       .then(response =>{
           res.send(response.data)
       })
 })

 module.exports = fakeRouter;