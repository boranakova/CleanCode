const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ejs = require("ejs");

app.use(express.static("public"));
app.set('view engine','ejs');


app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});

app.get('/',(req,res) =>{
  res.render('index');
})
app.get('/add_post',(req,res) =>{
  res.render('add_post');
})
app.get('/post',(req,res) =>{
  res.render('post');
})
app.get('/about',(req,res) =>{
  res.render('about');
})
