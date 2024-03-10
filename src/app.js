const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const hbs = require("hbs");

//public static path

const path = require('path');
//console.log(__dirname);
const static_path = path.join(__dirname , "../public");
const template_path = path.join(__dirname , "../templates/views");
const partial_path = path.join(__dirname , "../templates/partials");


//seting up hbs page
app.set('view engine' , 'hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));

//routing
//app.get(route,callback)

app.get("/",(rep,res) =>{
    res.render("index");
})



//error page
app.get("*",(rep,res) =>{
    res.render("404 error");
})

app.listen(port , ()=>{
    console.log(`${port}`);
})