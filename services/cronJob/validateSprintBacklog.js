const cron = require("cron");
const constants = require("../../configs/constants");
const { getIssue } = require("../getInfoIssue");
const { createIssue } = require("../createIssueOnJira");
const { getDataFromSprintBacklog } = require("../readDataFromSheet");
const { writeJiraIDForSheetSprintBacklog } = require("../writeDataToSheet");

const checkAndCreateSubtaskForEachStory = async (value) => {
  const ids = [];
  for (const item of value) {
    // const updateItem = { ...item };
    ids.push(item["Jira ID"]);
    if (item.task && Array.isArray(item.task) && item.task.length > 0) {
      for (const subtask of item.task) {
        const id = subtask["Jira ID"];
        const issueInfo = await getIssue(id);

        if (issueInfo === false) {
          const newIssue = await createIssue(
            subtask,
            constants.SUBTASK,
            item["Jira ID"]
          );
          subtask["Jira ID"] = newIssue.key;
        } else if (issueInfo) {
          subtask["Jira ID"] = id;
        }
        ids.push(subtask["Jira ID"]);
      }
    }
  }
  return ids;
};

const cronJobOnSprintBacklog = async () => {
  const data = await getDataFromSprintBacklog(constants.SHEETID);
  if (data && data.length > 0) {
    const result = await checkAndCreateSubtaskForEachStory(data);
    if (result && result.length > 0) {
      writeJiraIDForSheetSprintBacklog(result);
    }
  }
};

const cronJob = new cron.CronJob("*/35 * * * *", async () => {
  const startDate = new Date();
  console.log(
    `Cron Job on Sprint Backlog start at ${startDate.getHours()}:${startDate.getMinutes()}:${startDate.getSeconds()} ${startDate.getDate()}-${
      startDate.getMonth() + 1
    }-${startDate.getFullYear()}`
  );
  await cronJobOnSprintBacklog();
  const endDate = new Date();
  console.log(
    `Cron Job on Sprint Backlog end at ${endDate.getHours()}:${endDate.getMinutes()}:${endDate.getSeconds()} ${endDate.getDate()}-${
      endDate.getMonth() + 1
    }-${endDate.getFullYear()}`
  );
});

cronJob.start();
