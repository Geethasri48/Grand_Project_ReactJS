const express = require('express')
const macrouter = express.Router()
// const book = require('../model/book') 

const mac=require('../model/mac')
const monk= require('monk')

var db = monk('127.0.0.1:27017/user')
macrouter.post('/postdata', async(req,res)=>{
    let machine;
    try{
        machine = new mac({
            frm:req.body.send.frm,
            id1:req.body.send.id1,
            clg:req.body.send.clg,
            dro:req.body.send.dro,
            cop:req.body.send.cop,
            app:req.body.send.app,
            rem:req.body.send.rem,
            
        })
        await machine.save()
    }catch (err){
        console.log(err)
    }
    if(!machine){
        return res.status(500).json({msg:"Someting went wrong"})
    }
    return res.status(200).json({machine})
})
module.exports= macrouter;