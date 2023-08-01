const router = require('express').Router()
const db = require('../models/index')

router.get('/',(req,res)=>{
    db.Place.find()
    .then((places)=>{
        res.render('places/index',{places})
    })
    .catch(err =>{
        res.render('error404')
    })
})


router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
            let message = 'Validation Error!'
            // Todo: Find all validation errors
            res.render('places/new', { message })
        }
        else {
            res.render('error404')
        }
    })
})
  

router.get('/new',(req,res)=>{
   res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place })
    })
    .catch(err => {
        res.render('error404')
    })
})


router.put('/:id', (req, res) => {
    
})
  
  

router.get('/:id/edit',(req,res)=>{
    
})

router.delete('/:id',(req,res)=>{
    db.Place.findByIdAndDelete(req.params.id)
    .then(()=>{res.status(303).redirect('/places')})
})

router.post('/:id/comment',(req,res)=>{
    console.log(req.body)
    // req.body.rant = req.body.rant ? true :false
    req.body.rant = !!req.body.rant             //returns boolean
    db.Place.findById(req.params.id)
    .then(place =>{
        db.Comment.create(req.body)
        .then(comment=>{
            place.comments.push(comment.id)
            place.save()
            .then(()=>{
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err=>{
            res.render('error404')
        })
    })
    .catch(err=>{
        res.render('error404')
    })
})

router.delete('/:id/comment/:rantId',(req,res)=>{
    res.send('Delete a rant about particular place')
})

router.get('*',(req,res)=>{
    res.render('places/error404')
})


module.exports = router