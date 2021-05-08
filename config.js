require("dotenv").config();
const data = require("./data");
const elasticsearch = require("elasticsearch");

const connectionString = process.env.SEARCHBOX_URL;

const client = new elasticsearch.Client({
  host: connectionString,
});

//create symptoms index
/*client.indices.create(
  {
    index: "symptoms",
  },
  (err, res, status) => {
    if (err) {
      console.log(err);
    } else {
      console.log("create", res);
    }
  }
);*/

//populate index with data.json
const symptoms_data = data.data;
let body = [];

/*symptoms_data.forEach((item) => {
  body.push({ index: { _index: "symptoms" } });
  body.push(item);
});*/

/*client.bulk({
  index: "symptoms",
  body: body,
});*/

exports.client = client;
