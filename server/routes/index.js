let express = require('express');
let router = express.Router();
let indexController = require('../controller/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET products page. */
router.get('/projects', indexController.displayProductPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

module.exports = router;
