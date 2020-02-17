var express = require('express');
var router = express.Router();
var MessageModel = require('../models/message')

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('home');
});

router.get('/work', function (req, res, next) {

  res.render('work')
})

router.get('/projects', function (req, res, next) {

  res.render('projects')
})

router.get('/team', function (req, res, next) {

  res.render('team')
})

router.get('/contact', function (req, res, next) {

  res.render('contact')
})

router.post('/contact', function (req, res, next) {
  const getFrenchDate = () => {
    return new Date(new Date().valueOf() + 3600000);
  };


  console.log(req.body)
  newMessage = new MessageModel({
    sender_email: req.body.email,
    content: req.body.content,
    date: getFrenchDate(new Date),
  })

  newMessage.save(function (err, message) {
    if (err) {
      console.log("MESSAGE NOT SAVED", err)
    } else if (message) {
      console.log("MESSAGE SAVED", message)
    }
  })
  res.redirect('/')
})





module.exports = router;
