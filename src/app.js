const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;

//joining path
const staticPath = (path.join(__dirname,"../public"));
const partialPath = (path.join(__dirname,"../templates/partials"));
const templatePath = (path.join(__dirname,"../templates/views"));
app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);

//routing
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("*",(req,res)=>{
    res.render("error",{
        errorMsg: "Opps! Page Not Found"
    });
});

app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`);
});