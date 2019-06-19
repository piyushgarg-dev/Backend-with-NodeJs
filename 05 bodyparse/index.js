const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:false}));
 
app.use('/login', express.static(__dirname+'/public'));


app.get('/',(req,res)=>{
    res.send('Helo my app');
});

app.post('/login',(req,res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    
    res.redirect('/');

});

app.listen(3000,()=>{
    console.log('Server Running localhost:3000');
})