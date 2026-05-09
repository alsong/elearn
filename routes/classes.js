var express = require('express');
var router = express.Router();

//create class object
var Class = require('../models/class');

//classes page
router.get('/', (req, res) =>  {
   Class.getClasses((err,classes) => {
    if(err) throw err;
     res.render('classes/index',{classes: classes});
   },3)
});

//Details
router.get('/:id/details', (req,res) => {
    Class.getClassById([req.params.id],(err,classname) => {
        if(err) throw err;
        res.render('classes/details',{classname:classname});
    })
});

module.exports = router;
