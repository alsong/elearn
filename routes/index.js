var express = require('express');
var router = express.Router();

//create class object
var Class = require('../models/class');

/* GET home page. */
router.get('/', function(req, res) {
   Class.getClasses((err,classes) => {
     res.render('index',{classes: classes});
   },3)
});

module.exports = router;
