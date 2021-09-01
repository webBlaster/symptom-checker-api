const authApi = process.env.AUTH_API;
const diagnosisApi = process.env.DIAGNOSIS_API;
const username = process.env.APIMEDIC_USERNAME;
const password = process.env.APIMEDIC_PASSWORD;

module.exports = {
  username,
  password,
  authApi,
  diagnosisApi,
};
