const search = require("./model/search.js");
const diagnosis = require("./model/diagnosis.js");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const { searchForSymptom } = search;
const { diagnose } = diagnosis;

app.get("/", (req, res) => {
  res.json({ name: "Symptom Checker", version: "1.0.0" });
});

app.get("/symptom/:string", async (req, res) => {
  let result = await searchForSymptom(req.params.string);
  res.json(result.hits.hits);
});

app.get("/diagnose/:symptoms/:gender/:year", diagnose);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App watching on port ${port}`);
});
