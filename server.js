const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@123",
  database: "users",
  saveUninitialized: true,
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err.stack);
    return;
  }
  console.log("connected to database");
});
app.use(
  session({
    secret: "your_secret_key",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("../views/login.ejs");
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM user WHERE username = ? AND password = ?";

  db.query(query, [username, password], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      req.session.username = username;
      res.redirect("/home");
    } else {
      res.redirect("/login");
    }
  });
});

app.get("/register", (req, res) => {
  res.render("../views/registration.ejs");
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const query = "INSERT INTO user (username,password) VALUES(?,?)";
  db.query(query, [username, password], (err) => {
    if (err) throw err;
    res.redirect("/login");
  });
});

const PORT = process.env.PORT || 30000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} `);
});
