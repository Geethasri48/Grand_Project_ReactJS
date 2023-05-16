const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
    num1:{
        type:Number,
        require:true
    },
    dat:{
        type:String,
        require:true
    },
    rem:{
        type:String,
        require:true
    }
})


module.exports = mongoose.model('bundles', bookSchema)