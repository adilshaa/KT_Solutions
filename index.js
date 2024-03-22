const express = require("express");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", "./views");

app.listen(PORT, () => {
  console.log("connected");
});

module.exports = app;
