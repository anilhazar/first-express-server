const express = require("express");
const app = express();

app.get("/", function(req, res){
    console.log(req);
})
//sudo np install -g nodemoon

app.get("/about", function(req,res){
    res.send("Hello World");
})

app.listen(4000, function () {
    console.log("Server 4000 ü kontrol etmeye başladım");
    
});

