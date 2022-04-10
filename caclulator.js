const express = require("express");

const bodyParser = require("body-parser");

const app = express();



app.use(bodyParser.urlencoded({extended:true}));
// to get the post req we using body parser
// to get the data in the req we using urlencoded



app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html")
});

// __dirname -- used to get the file  path coz if we our application working on another syystem anything we dont dont know where the file for that we insted of putting tonly the file file we seding the whole file path
app.post("/",function(req, res){
//console.log(req.body);

var num1 =Number(req.body.num1);//parser acceptsa s a text to chnage into number use Number()
var num2 =Number(req.body.num2);

var  result = Number(num1+num2);

    res.send("The result is "+result);
});

app.listen(3000,function(){
    console.log("server started")
}
);

//bmi calculator
app.get("/bmicalculator",function(req,res){
res.sendFile(__dirname+"/bmicalculator.html");
})

app.post("/bmicalculator",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var output = weight / (height * height);
    res.send("Your BMI is " + output);
});


