const search = require("./functions/search.js");
const diagnosis = require("./functions/diagnosis.js");
const signup = require("./functions/register.js");
const login = require("./functions/signin.js");
const history = require("./functions/history.js");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const { searchForSymptom } = search;
const { diagnose } = diagnosis;
const { getHistory } = history;
const { signin } = login;
const { register } = signup;

app.get("/", (req, res) => {
  res.json({ name: "Symptom Checker", version: "1.0.0" });
});

app.get("/login", signin);

app.get("/register", register);

app.get("/symptom/:string", searchForSymptom);

app.get("/diagnose/:symptoms/:gender/:year", diagnose);

app.get("/history/:id", getHistory);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App watching on port ${port}`);
});
