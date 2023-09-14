const cron = require("cron");
const constants = require("../../configs/constants");
const { getIssue } = require("../getInfoIssue");
const { createIssue } = require("../createIssueOnJira");
const { getDataFromPBI } = require("../readDataFromSheet");
const { writeJiraIDForSheetPBI } = require("../writeDataToSheet");
const { checkSheet } = require("../../utils/checkSheet");
const { sendMail } = require("./emailService");

const checkAndCreateIssue = async (value) => {
  const issueIds = [];

  for (const item of value) {
    const id = item["Jira ID"];
    const issueInfo = await getIssue(id);

    if (issueInfo === false) {
      const newIssue = await createIssue(item, constants.STORY);
      issueIds.push({ oldId: id, newId: newIssue.key });
    } else if (issueInfo) {
      issueIds.push({ oldId: id, newId: id });
    }
  }

  return issueIds;
};

const cronJobOnPBI = async () => {
  const data = await getDataFromPBI(constants.SHEETID);
  const check = checkSheet(data, constants.KEYPBI);

  if (typeof check === "object") {
    const res = await checkAndCreateIssue(data);
    if (res && res.length > 0) {
      const newListJiraID = res.map((item) => item.newId || item.oldId);
      writeJiraIDForSheetPBI(newListJiraID);
    }
  } else if (typeof check === "string") {
    sendMail(constants.EMAIL, check, "PBI");
  }
  return;
};

cronJobOnPBI();

const cronJob = new cron.CronJob("*/30 * * * *", async () => {
  const startDate = new Date();
  console.log(
    `Cron Job on PBI start at ${startDate.getHours()}:${startDate.getMinutes()}:${startDate.getSeconds()} ${startDate.getDate()}-${
      startDate.getMonth() + 1
    }-${startDate.getFullYear()}`
  );
  await cronJobOnPBI();
  const endDate = new Date();
  console.log(
    `Cron Job on PBI end at ${endDate.getHours()}:${endDate.getMinutes()}:${endDate.getSeconds()} ${endDate.getDate()}-${
      endDate.getMonth() + 1
    }-${endDate.getFullYear()}`
  );
});

cronJob.start();
