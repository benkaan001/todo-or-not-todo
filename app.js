const express = require('express');
const app = express();
const todos = require('./routes/todos')

// add middleware -- without this we don't have body
app.use(express.json())





app.use('/api/v1/todos', todos)


const port = process.env.PORT || 3000;
app.listen (port, () =>{
    console.log(`=> 🌍 => server is listening on PORT ${port}......`);
})
