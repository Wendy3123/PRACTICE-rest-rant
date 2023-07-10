const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send('GET/places page')
})

router.post('/',(req,res)=>{
    res.send('POST/creates new place page')
})

router.get('/new',(req,res)=>{
    res.send('Form page for creating a new place')
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
    res.status(404).send('<h1>404 Page</h1>')
})


module.exports = router