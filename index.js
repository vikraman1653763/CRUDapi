import express from 'express';
import mongoose from 'mongoose';
import {postOne,getAll,getOne,updateOne,deleteOne} from './route/product.route.js';
import dotenv from 'dotenv';
const app = express()
dotenv.config();


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('hello world')
})
// POST 
app.post('/api/products',postOne ) 
// GET 
app.get('/api/products',getAll )
//GET ONE
app.get('/api/products/:id',getOne )

//UPDATE
app.put('/api/product/:id',updateOne )

//DELETE
app.delete('/api/product/:id',deleteOne)

mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@backend.ajncx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backend`)
  .then(()=>{
    console.log("Connected to the mongo db")
    app.listen(3000,()=>{
        console.log("app is running on 3000")
    })
  })
  .catch(()=>{
    console.log("connection failed")
  })