let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About'});
}

module.exports.displayProductPage = (req, res, next) => {
    res.render('projects', { title: 'Products'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact'});
}