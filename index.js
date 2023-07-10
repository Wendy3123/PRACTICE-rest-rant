const express = require('express')
const app = express()            //check documentation you get module from to see if it needs to be invoked

app.get('/',(req,res)=>{
    res.send('Hello World!!!!')     //sends hello world to localhost:3000 
})

app.listen(3000,()=>{
    console.log('listening')
})