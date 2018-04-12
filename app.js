const express = require('express');
const hbm = require('hbs');
const port = process.env.PORT || 3000;
var app = express();
app.set('view engine','hbs');
//app.use(express.static(__dirname + '/static'));
app.use((req,res,next) =>{
    console.log(`Call Made to ${req.url}`);
   // res.render('site-maintenance.hbs');
    next();
    });
app.get('/',(req,res) =>{
res.send("Hello Server");
});
app.get('/about',(req,res) =>{
    res.send("Hello About");
    });
    app.get('*',(req,res) =>{
       // res.send("Invalid URL");
            res.render('invalid-request.hbs',{
                interpolation: 'Test Data Model'
            });// Render hbs page
        });
       
app.listen(port);