const express = require('express')
const router = express.Router()
const book = require('../model/book') 
// const macrouter = express.Router()
const mac = require('../model/mac')
const rea= require('../model/rea')

const monk= require('monk')

var db = monk('127.0.0.1:27017/Project')
var db1=monk('127.0.0.1:27017/Project')


router.post('/postdata', async(req,res)=>{
    let bundles;
    try{
        bundles = new book({
            num1:req.body.send.num1,
            dat:req.body.send.dat,
            rem:req.body.send.rem,
        })
        await bundles.save()
    }catch (err){
        console.log(err)
    }
    if(!bundles){
        return res.status(500).json({msg:"Someting went wrong"})
    }
    return res.status(200).json({bundles})
})

const dbo=db.get('bundles')

router.get('/',function(req, res, next){
    res.render('index', {title:'Express'});
});

router.get('/getData', function(req, res){
 dbo.find({}, function (err, docs){
    {
        if(err){
            res.send(err)
        }else{
            res.send(docs)
        }
    }
 })
})

router.post('/postdata1', async(req,res)=>{
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

const db0=db1.get('machines')

router.get('/',function(req, res, next){
    res.render('index', {title:'Express'});
});

router.get('/getData2', function(req, res){
 db0.find({}, function (err, docs){
    {
        if(err){
            res.send(err)
        }else{
            res.send(docs)
        }
    }
 })
})
router.post('/postdata3', async(req,res)=>{
    let reapair;
    try{
        reapair = new rea({
            num1:req.body.send.num1,
            dat:req.body.send.dat,
            com:req.body.send.com,
            rem:req.body.send.rem,
            })
        await reapair.save()
    }catch (err){
        console.log(err)
    }
    if(!reapair){
        return res.status(500).json({msg:"Someting went wrong"})
    }
    return res.status(200).json({reapair})
})
const db2=db.get('reapairs')

router.get('/',function(req, res, next){
    res.render('index', {title:'Express'});
});

router.get('/getData0', function(req, res){
 db2.find({}, function (err, docs){
    {
        if(err){
            res.send(err)
        }else{
            res.send(docs)
        }
    }
 })
})


module.exports= router;