const model = require("./model/model.js");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ name: "Symptom Checker", version: "1.0.0" });
});

app.get("/getSymptoms/:string", (req, res) => {
  let result = model.getSymptom(req.params.string);
  res.json(result);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is Listening on port ${port}`);
});
