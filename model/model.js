class symptomChecker {
  getSymptom(string) {
    return string;
  }
}

const model = new symptomChecker();

module.exports = { getSymptom: model.getSymptom };
