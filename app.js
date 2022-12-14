<<<<<<< HEAD
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
=======
const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req,res) => {
  const blog = {
    id: 1,
    title: "Blog title",
    description: "Blog description",
  }
  res.send(blog);
});

app.listen(port, () => {
  console.log(`Port ${port} çalisiyor.`);
  
});
>>>>>>> 9a07dd23fbd9e2d31888d1d69bdac50e96862cb3
