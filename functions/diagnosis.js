const History = require("../model/history.js").History;
const fetch = require("node-fetch");
//Cryptography module
const crypto = require("crypto");
//Elastic Search Client
const client = require("../config").RedisClient;
//Constants
const { password, authApi, username, diagnosisApi } = require("../constants");

//Create HMACMD5 hash
const createHash = () => {
  let hash = crypto.createHmac("md5", password);
  let updated = hash.update(`${authApi}/login`).digest("base64");
  return updated;
};

//Fetch access token from auth server
const fetchAccessToken = async () => {
  const hashedCred = createHash();
  let request = await fetch(`${authApi}/login`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${username}:${hashedCred}`,
      Host: "authservice.priaid.ch",
    },
  }).catch((error) => {
    console.log(error);
  });

  let response = await request;
  if (response) {
    let result = await response.json();
    return result;
  }
};

//fetch diagnosis
const getDiagnosis = async (
  token,
  symptoms,
  gender = "male",
  year = "1988"
) => {
  const request = await fetch(
    `${diagnosisApi}/diagnosis?token=${token}&language=en-gb&symptoms=[${symptoms}]&gender=${gender}&year_of_birth=${year}`
  ).catch((error) => console.log(error));
  const response = await request;
  if (response) {
    return await response.json();
  }
};

const diagnose = async (req, res) => {
  const { symptoms, gender, year, id } = req.params;
  let symptomList = symptoms;
  client.get("Bearer-Token", async (error, data) => {
    if (data) {
      let diagnosis = await getDiagnosis(data, symptomList, gender, year);
      res.json(diagnosis);
      return;
    }
    if (error) {
      console.log(error);
    } else {
      let result = await fetchAccessToken();
      if (!result) return;
      client.setex("Bearer-Token", 7200, result.Token);
      let diagnosis = await getDiagnosis(
        result.Token,
        symptomList,
        gender,
        year
      );
      //save in history
      let userId = id;
      // Create user in our database
      try {
        History.create({
          user_id: userId,
          diagnosis_array: [JSON.stringify(diagnosis)],
        });
      } catch (error) {
        console.log(error);
      }

      res.json(diagnosis);
    }
  });
};

module.exports = {
  diagnose,
};
