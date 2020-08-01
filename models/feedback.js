const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
})

mongoose.model("Feedback", postSchema)