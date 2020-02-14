var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    // get list of all articles
    res.render('articlesList');
});

router.get('/', function (req, res, next) {
    // get list by author / by tag / by search
    res.render('articlesList');
});

module.exports = router;