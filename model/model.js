const searchClient = require("../config");
const client = searchClient.client;

const search = (string) => {
  return client.search({
    index: "symptoms",
    body: {
      query: { match: { Name: string } },
    },
  });
};

const Symptoms = {
  get: search,
};

module.exports = { Symptoms };
