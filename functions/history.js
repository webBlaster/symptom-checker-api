const History = require("../model/history").History;

const getHistory = async (req, res) => {
  try {
    let result = await History.find({ user_id: req.params.id });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHistory,
};
