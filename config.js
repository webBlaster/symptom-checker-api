require("dotenv").config();
const elasticsearch = require("elasticsearch");
const redis = require("redis");
const mongoose = require("mongoose");

const connectionString = process.env.SEARCHBOX_URL;
// Elastic Search Client
const ESclient = new elasticsearch.Client({
  host: connectionString,
});

//Redis Client
const RedisClient = redis.createClient(process.env.REDIS_URL);

RedisClient.on("error", (e) => {
  debug("Redis ready", e);
});

//Set up default mongoose connection
const mongoDB = process.env.DATABASE_URL;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = {
  ESclient,
  RedisClient,
};
