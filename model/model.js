const searchClient = require("../config");
const client = searchClient.client;

const search = (string) => {
  return client.search({
    index: "symptoms",
    type: "properties",
    body: {
      query: { match: { Name: string } },
    },
  });
};

class symptomChecker {
  getSymptom(string) {
    return search(string);
  }
}

const model = new symptomChecker();

module.exports = { getSymptom: model.getSymptom };
