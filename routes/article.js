var express = require('express');
var router = express.Router();

router.get('/:articleId', function (req, res, next) {
    console.log(req.params)
    // get article in DB and send it to generic page
    res.render('article');
});

router.post('/', function (req, res, next) {
    // save article need key
});

router.delete('/', function (req, res, next) {
    // need key
});

module.exports = router;