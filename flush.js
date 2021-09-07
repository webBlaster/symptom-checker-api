const client = require("./config.js").RedisClient;

client.on("connect", () => {
  client.flushall(function (err, succeeded) {
    console.log(succeeded);
  });
});
