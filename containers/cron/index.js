var cron = require("node-cron");
var axios = require("axios");

console.log("Starting cron container");

const hitNextApp = async () => {
  console.log("sending request");
  const response = await axios.post("http://app:3000/api/cron", {
    ping: "ping",
  });
  console.log(response.data);
};

cron.schedule("* * * * *", hitNextApp);
