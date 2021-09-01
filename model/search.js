const client = require("../config").ESclient;

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
