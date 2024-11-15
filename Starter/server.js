const express = require("express");
require("dotenv").config();
const configViewEngine = require("./src/config/viewEngine");
const app = express();
const webRoutes = require("./src/routes/web");
const connection = require("./src/config/database");

const port = process.env.PORT;
const hostName = process.env.HOST_NAME;

configViewEngine(app);

app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

app.use("/", webRoutes);

// connection.query("SELECT * FROM Users", function (err, results, fields) {
//   console.log(results); // results contains rows returned by server
// });

app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port}`);
});
