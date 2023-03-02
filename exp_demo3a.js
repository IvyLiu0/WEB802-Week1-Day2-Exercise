var express = require('express');
var router = express.Router();

router.get('/home', function(req,res){
    res.send("Hello world!");
});

router.post('/about', function(req,res){
    res.send("You just call the post method at '/hello'\n")
});

//export this router to use in the exp_demo3b
module.exports = router;