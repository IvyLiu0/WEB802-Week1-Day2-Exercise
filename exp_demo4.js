var express = require('express');
var app = express();

app.get('/home', function(req,res){
    res.send('Home page.');
});
app.get('/about', function(req,res){
    res.send('About page.');
});

app.listen(3000);


