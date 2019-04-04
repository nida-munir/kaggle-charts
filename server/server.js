const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
// add headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => {
  console.log(">>> 🌎 Node Server is running at http://localhost:" + port);
});

app.get("/api/csvToJson", (req, res) => {
  const csv = require("csvtojson");
  const csvFilePath = "./heart.csv";
  console.log(csvFilePath);
  csv()
    .fromFile(csvFilePath)
    .then(jsonObj => {
      console.log(jsonObj);
      res.send(jsonObj);
      /**
       * [
       * 	{a:"1", b:"2", c:"3"},
       * 	{a:"4", b:"5". c:"6"}
       * ]
       */
    });
});
