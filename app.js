const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/uge/:id", (req, res) => {
  const id = req.params.id;
  res.sendFile(__dirname + "/public/views/uge"+id+".html");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});