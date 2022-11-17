let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with book model

let Grocery = require('../models/groceries');
let groceryController = require('../controller/grocery')

/* CRUD Operation */
/* Read Operation */
/* Get route for the book list */

router.get('/', groceryController.displayGroceryList);

/* Add Operation */
/* Get route for displaying the Add-Page -- Create Operation */
router.get('/add', groceryController.displayAddPage);
/* Post route for processing the Add-Page -- Create Operation */
router.post('/add', groceryController.processAddPage);

/* Edit Operation */
/* Get route for displaying the Edit Operation -- Update Operation */
router.get('/edit/:id', groceryController.displayEditPage);

/* Post route for displaying the Edit Operation -- Update Operation */
router.post('/edit/:id', groceryController.processEditPage);

/* Delete Operation */
/* Get to perform Delete Operation -- Dletion */

router.get('/delete/:id', groceryController.performDelete);


module.exports=router;

//Add func wont work, ask about that tmr for OH,
//Also ask about the "module.exports=router;" if we need this line of code