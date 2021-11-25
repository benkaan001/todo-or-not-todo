const connectDB = require('./db/connect');
require('dotenv').config();

const express = require('express');
const app = express();
const todos = require('./routes/todos');

// add middleware -- without this we don't have body
app.use(express.json())





app.use('/api/v1/todos', todos)


const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen (port, () =>{
            console.log(`=> 🌍 => server is listening on PORT ${port}......`);
        })
        
    } catch (error) {
        console.log(error);
        
    }
}
start();


