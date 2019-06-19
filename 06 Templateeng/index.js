const express = require('express');
const path = require('path');
const  app = express();

var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/',(req,res)=>{
    res.render('index');
});


app.listen(port, ()=>{
    console.log("Server Running at: "+port);
});