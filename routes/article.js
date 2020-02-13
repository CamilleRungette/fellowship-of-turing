var express = require('express');
var router = express.Router();

router.get('/:articleId', function (req, res, next) {
    // get article in DB and send it to generic page
});

module.exports = router;