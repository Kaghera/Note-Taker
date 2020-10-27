//Load data 
const fs = require('fs');
let rawData = fs.readFileSync("./db/db.json");
let data = JSON.parse(rawData)
const app = require("express").Router();
console.log(data) 

//HTML routes
module.exports = function(app) {
  
  //API routes
app.get("/api/notes", function (req, res){
  res.send(rawData);
});

app.post("/api/notes", function(req, res) {

  let newNote = {title: req.body.title, text: req.body.text};

  fs.readFile("./db/db.json", "utf8", data => {
    const myNotes = JSON.parse(data);
    myNotes.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(myNotes, null, 2), err => {
      res.send(rawData);
    });
  });

});

app.delete("/api/notes/:id", function(req, res){
  res.json(newNote);
});
};
