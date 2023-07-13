require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()            //check documentation you get module from to see if it needs to be invoked
const methodOverrride = require('method-override')
const PORT=process.env.PORT

app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.use('/places',require('./controllers/places'))  //connects any search to /places to the controllers/places file


app.get('/',(req,res)=>{
    // res.send('Hello World!!!!')     //sends hello world to localhost:3000 
    res.render('home')      //when using .render the argument in the quote takes the name of the file without the extension (.jsx)
})

app.get('*',(req,res)=>{        //* (path) goes to any other pages that you don't have set up
    // res.send('<h1>404 PAGE</h1>')   //html content needs quotes around 
    // res.status(404).send('<h1>404 PAGE</h1>')   //.status(404) doesn't show to user page
    res.render('error404') 
})

app.listen(PORT,()=>{
    console.log('listening to port',PORT)
})