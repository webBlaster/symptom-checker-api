const searchClient = require("../config");
const client = searchClient.client;

const Symptoms = {
  getSymptom: search(string),
};

const search = (string) => {
  return client.search({
    index: "symptoms",
    body: {
      query: { match: { Name: string } },
    },
  });
};

module.exports = { Symptoms };
