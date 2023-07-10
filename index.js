require('dotenv').config()
const express = require('express')
const app = express()            //check documentation you get module from to see if it needs to be invoked
const PORT=process.env.PORT

app.get('/',(req,res)=>{
    res.send('Hello World!!!!')     //sends hello world to localhost:3000 
})

app.get('*',(req,res)=>{        //* (path) goes to any other pages that you don't have set up
    // res.send('<h1>404 PAGE</h1>')   //html content needs quotes around 
    res.status(404).send('<h1>404 PAGE</h1>')   //.status(404) doesn't show to user page
})

app.listen(PORT,()=>{
    console.log('listening to port',PORT)
})