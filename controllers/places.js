const router = require('express').Router()
const places = require('../models/places.js')

router.get('/',(req,res)=>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: './images/H-THAI-ML.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: './images/codingcatcafe.jpg'
      }]
      
    res.render('places/index',{places})
})



router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)

    res.redirect('/places')
  })
  

router.get('/new',(req,res)=>{
    // res.send('Form page for creating a new place')
    res.render('places/new')
})

router.get('/:id',(req,res)=>{
    res.send('Details about a particular place')
})

router.put('/:id',(req,res)=>{
    res.send('Update a particular place')
})

router.put('/:id/edit',(req,res)=>{
    res.send('Form page for editing an existing place')
})

router.delete('/:id',(req,res)=>{
    res.send('Delete a particular place')
})

router.post('/:id/rant',(req,res)=>{
    res.send('Create rant about a particular place')
})

router.delete('/:id/rant/:rantId',(req,res)=>{
    res.send('Delete a rant about particular place')
})

router.get('*',(req,res)=>{
    res.render('places/error404')
})


module.exports = router