const cron = require("cron");

const cronJob = new cron.CronJob("*/35 * * * *", () => {});

cronJob.start();
