const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname,"public")));
app.set("view-engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json);

app.get('/',(req,res)=>{
    res.render("index");
})

app.listen(3000,()=>{
    console.log("server Started at port 3000")
})