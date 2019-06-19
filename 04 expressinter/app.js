const express = require("express");
const app = express();

var myconsoleLog = function(req, res, next){
    console.log('I AM MIDDLEWARE');
    next();
};

var serverTime = function(req,res,next)
{
    req.requestTime = Date.now();
    next();
};

app.use(serverTime);

app.get("/", (req, res) => {
  res.send("Hello World 😃 <div>Time:"+ req.requestTime+'</div>');
  console.log('Hello World from /');
});



app.listen(3000, () => {
  console.log("Listening to port 3000....");
});
