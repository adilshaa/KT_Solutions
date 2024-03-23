const EmployeeController = require("../controller/employee");
const express = require("express");

const app = express();
app.get("/", EmployeeController.addEmployee);

module.exports = app;
 