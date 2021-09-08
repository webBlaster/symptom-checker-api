//Require Mongoose
const mongoose = require("mongoose");

//Define a schema
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  user_id: String,
  diagnosis_array: [String],
});

// Compile model from schema
const History = mongoose.model("History", HistorySchema);

module.exports = {
  History,
};
