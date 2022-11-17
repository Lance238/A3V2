let mongoose = require('mongoose');
//create a book model
let groceriesModel = mongoose.Schema({
    item: String, 
    quantity: String,
    price: Number,},
    
    {
        collection: "groceries"
    }
);

module.exports = mongoose.model('Groceries', groceriesModel);
