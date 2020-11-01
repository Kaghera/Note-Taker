const express = require("express");
const fs = require("fs");
const path = require("path");
const htmlRoute = require("./apiroutes");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static('public'));

require("./apiroutes")(app);
require("./htmlroutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});