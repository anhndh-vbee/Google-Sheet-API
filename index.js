const express = require("express");
const router = require("./routes/routes");
require("./services/cronJob/cronJobOnPBI");
require("./services/cronJob/cronJobOnSprintBacklog");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(8087, () => {
  console.log("Server run");
});
