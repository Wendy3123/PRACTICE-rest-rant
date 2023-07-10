const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send('GET/places page')
})



module.exports = router