const express = require('express')
const app = express();

app.get('/',(req,res,next)=>{
    res.send('Hello Word!!');
    next();
})

app.listen(3000,(req,res,next)=>{
    console.log("Server Started");
})