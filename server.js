const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});
app.get("/contact", function(req, res){
    res.send("Contact me at shubho1chakraborty1@gmail.com!");
});
app.get("/about", function(req, res){
    res.send("I am a Programmer!");
});
app.get("/games", function(req, res){
    res.send("I am also a Game Programmer!");
});


app.listen(3000, function(){
    console.log("Server Started on port 3000!");
});