const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000

const app = express()


// middleware
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Api running for helping network')
})

app.listen(port,console.log('port running on ',port))