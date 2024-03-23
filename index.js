const express = require("express");

const app = express();
const PORT = 8080;
const path = require("path");

const router = require("./router/employee.router");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


// Database
const db = require('./config/db.connections');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))
 

app.set("view engine", "pug");
app.set("views", "./views");


app.use("/", router);
app.listen(PORT, console.log("connected"));

module.exports = app;
