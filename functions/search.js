const client = require("../config").ESclient;

const searchForSymptom = async (req, res) => {
  let result = await client.search({
    index: "symptoms",
    body: {
      query: { match: { Name: req.params.string } },
    },
  });
  res.json(result.hits.hits);
};

module.exports = {
  searchForSymptom,
};
