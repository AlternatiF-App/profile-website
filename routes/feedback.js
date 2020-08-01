const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Feedback = mongoose.model('Feedback')

router.post('/create-feedback', (req, res) => {
    const {type, title, desc} = req.body
    if(!type && !title && !desc){
        return res.status(422).json({error:"Tolong isi semua kolom!"})
    }
    const feedback = new Feedback({
        type,
        title,
        desc
    })
    feedback.save()
    .then(result => {
        res.json({feedback:result})
    })
    .catch(err => {
        console.log(err)
    })
})

router.get('/read-feedback', (req, res) => {
    Feedback.find()
    .then(result =>  {
        res.json({result})
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router