let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Grocery = require('../models/groceries');


module.exports.displayGroceryList = (req,res,next)=>{
    Grocery.find((err, grocerylist)=>{
        if(err){
            return console.error(err);
        }
        else{
            res.render('grocery/list', {title: 'Groceries',
            Grocerylist: grocerylist})
        }
    });
}

module.exports.displayAddPage = (req,res,next)=> {
    res.render('grocery/add', {title: 'Add Grocery'})
}

module.exports.processAddPage = (req,res,next)=> {
    let newGrocery = Grocery ({
        "item":req.body.item,
        "quantity":req.body.quantity,
        "price":req.body.price
    });
    Grocery.create(newGrocery,(err,Groceries) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/grocery-list');
        }
    });
}

module.exports.displayEditPage = (req,res,next)=> {
    let id = req.params.id;
    Grocery.findById(id,(err, groceryToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('grocery/edit', {title: 'Edit Grocery', grocery: groceryToEdit});
        }
    })
}

module.exports.processEditPage = (req,res,next)=> {
    let id = req.params.id;
    let updateGrocery = Grocery({
        "_id":id,
        "item":req.body.item,
        "quantity":req.body.quantity,
        "price":req.body.price
    })
    Grocery.updateOne({_id:id},updateGrocery,(err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/grocery-list');
        }
    })
}

module.exports.performDelete = (req,res,next)=> {
    let id = req.params.id;
    Grocery.deleteMany({_id:id}, (err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/grocery-list');
        }
    })
}