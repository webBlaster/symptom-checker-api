const model = require("./model/model.js");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const { Symptoms } = model;

app.get("/", (req, res) => {
  res.json({ name: "Symptom Checker", version: "1.0.0" });
});

app.get("/getSymptoms/:string", async (req, res) => {
  let result = await Symptoms.get(req.params.string);
  res.json(result.hits.hits);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App watching on port ${port}`);
});
