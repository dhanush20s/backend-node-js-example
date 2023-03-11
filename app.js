const express =require('express')
const axios = require('axios')
const cors = require('cors')
const bodyParser =require('body-parser')

const fakeRouter = require('./routers/fakeRouter')
const artistsRouter = require('./routers/artistsRouter')
const moviesRouter = require('./routers/moviesRouter')

const app = express()
const port = 8080

app.use(cors({
    // origin:'http://localhost:3000'
}))

app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send('Building a basic api')
})


app.use(moviesRouter)
app.use(artistsRouter)
app.use(fakeRouter)


app.listen(port,()=>{
    console.log(`port is running ${port}`)
})