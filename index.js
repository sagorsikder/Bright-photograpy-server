const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()


// middleware
app.use(cors())
app.use(express.json())






const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.edl5qg1.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){

    try{

        const categoryCollection = client.db('brightPhotography').collection('category')

        app.get('/category',async (req,res)=>{
            const query = {};
            const cursor = categoryCollection.find(query)
            const category = await cursor.toArray()
            res.send(category);
        })


        
        app.get('/services/:id',async (req,res)=>{
            const id = req.params.id;
            const query = {_id:ObjectId(id)}
            const service = await categoryCollection.findOne(query)
            res.send(service)
        })
    }

    finally{

    }
}

run().catch(err =>console.log(err))







app.get('/',(req,res)=>{
    res.send('Api running for helping network')
})

app.listen(port,console.log('port running on ',port))