var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World! BY EXPRESS');
});

app.listen(8080);