const cron = require("cron");
const constants = require("../../configs/constants");
const { getIssue } = require("../getInfoIssue");
const { createIssue } = require("../createIssueOnJira");
const { getDataFromSprintBacklog } = require("../readDataFromSheet");
const { writeJiraIDForSheetSprintBacklog } = require("../writeDataToSheet");
const { checkSheet } = require("../../utils/checkSheet");
const { sendMail } = require("./emailService");
const { validateTimeSpent } = require("./validateSprintBacklog");

const checkAndCreateSubtaskForEachStory = async (value) => {
  const ids = [];
  const listErr = [];
  for (const item of value) {
    ids.push(item["Jira ID"]);
    if (item.task && Array.isArray(item.task) && item.task.length > 0) {
      for (const [index, subtask] of item.task.entries()) {
        if (subtask.hasOwnProperty("Story")) {
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
        } else {
          ids.push(subtask["Jira ID"]);
          listErr.push(
            `<tr>
            <td>Subtask number ${index + 1} of story ${item["Jira ID"]}</td>
            <td>Misses require field</td>
            </tr>`
          );
        }
      }
    }
  }
  if (listErr.length > 0) {
    sendMail(constants.EMAIL, listErr.join(""), "Sprint Backlog");
  }
  return ids;
};

const cronJobOnSprintBacklog = async () => {
  const data = await getDataFromSprintBacklog();
  const check = checkSheet(data, constants.KEYSPRINTBACKLOG);
  const checkSubtask = validateTimeSpent(data);
  if (typeof check === "object" && checkSubtask && checkSubtask.length === 0) {
    const result = await checkAndCreateSubtaskForEachStory(check);
    if (result && result.length > 0) {
      writeJiraIDForSheetSprintBacklog(result);
    }
  } else if (
    typeof check === "object" &&
    checkSubtask &&
    checkSubtask.length > 0
  ) {
    const content = `${checkSubtask.join("")}`;
    sendMail(constants.EMAIL, content, "Sprint Backlog");
  } else if (
    typeof check === "string" &&
    checkSubtask &&
    checkSubtask.length > 0
  ) {
    const content = `${checkSubtask.join("")}`;
    const _content = `${check} ${content}`;
    sendMail(constants.EMAIL, _content, "Sprint Backlog");
  } else if (
    typeof check === "string" &&
    checkSubtask &&
    checkSubtask.length === 0
  ) {
    sendMail(constants.EMAIL, check, "Sprint Backlog");
  }
  return;
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
