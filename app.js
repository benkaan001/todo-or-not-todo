const express = require('express');
const { send } = require('process');
const app = express();


app.get('/', (req,res) => {
    res.send(`<h1>test</h1>`);
})



const port = process.env.PORT || 3000;
app.listen (port, () =>{
    console.log(`=> 🌍 => server is listening on PORT ${port}......`);
})
