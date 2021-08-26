const searchClient = require("../config");
const client = searchClient.client;

const searchForSymptom = (string) => {
  return client.search({
    index: "symptoms",
    body: {
      query: { match: { Name: string } },
    },
  });
};

module.exports = {
  searchForSymptom,
};
