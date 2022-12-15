const express = require("express");
const mongoose = require("mongoose");

const path = require("path");
const ejs = require("ejs");
const Posts = require("./models/Posts");

const app = express();
const port = 3000;

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost/cleanblog-test-db");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});

app.get("/", async (req, res) => {
  const posts = await Posts.find({});
  res.render('index',{posts});
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});
app.get("/post", (req, res) => {
  res.render("post");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/posts", async (req, res) => {
  await Posts.create(req.body);
  res.redirect("/");
});
