const router = require('express').Router()
const db = require('../models/index')

router.get('/',(req,res)=>{
    db.Place.find()
    .then((places)=>{
        res.render('places/index',{places})
    })
    .catch(err =>{
        console.log('error', err)
        res.render('error404')
    })
})


router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(()=>{
        res.redirect('/places')
    })
    .catch(err =>{
        console.log('error', err)
        res.render('error404')
    })
})
  

router.get('/new',(req,res)=>{
   res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


router.put('/:id', (req, res) => {
    
})
  
  

router.get('/:id/edit',(req,res)=>{
    
})

router.delete('/:id',(req,res)=>{
    
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