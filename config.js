require("dotenv").config();
const elasticsearch = require("elasticsearch");
const redis = require("redis");

const connectionString = process.env.SEARCHBOX_URL;
// Elastic Search Client
const ESclient = new elasticsearch.Client({
  host: connectionString,
});

//Redis Client
const RedisClient = redis.createClient(process.env.REDIS_URL);

module.exports = {
  ESclient,
  RedisClient,
};
