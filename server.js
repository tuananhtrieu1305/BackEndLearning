const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT;
const hostName = process.env.HOST_NAME;

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World! with nodemon");
});
app.get("/sidePage", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port}`);
});
