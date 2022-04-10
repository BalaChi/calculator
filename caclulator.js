const express = require("express");

const bodyParser = require("body-parser");

const app = express();



app.use(bodyParser.urlencoded({extended:true}));
// to get the post req we using body parser
// to get the data in the req we using urlencoded



app.get("/",function(res,res){
res.sendFile(__dirname+"/index.html")
});

// __dirname -- used to get the file  path coz if we our application working on another syystem anything we dont dont know where the file for that we insted of putting tonly the file file we seding the whole file path
app.post("/",function(req, res){
//console.log(req.body);

var num1 =Number(req.body.num1);//parser acceptsa s a text to chnage into number use Number()
var num2 =Number(req.body.num2);

var  result = Number(num1+num2);

    res.send("The result of the calculation is "+result);
});

app.listen(3000,function(){
    console.log("server started")
}
);