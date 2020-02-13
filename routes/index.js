var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/work', function(req, res, next){

  res.render('work')
})

router.get('/projects', function(req, res, next){

  res.render('projects')
})

router.get('/team', function(req, res, next){

  res.render('team')
})

router.get('/articles', function(req, res, next){

  res.render('articles')
})

router.get('/contact', function(req, res, next){

  res.render('contact')
})






module.exports = router;
