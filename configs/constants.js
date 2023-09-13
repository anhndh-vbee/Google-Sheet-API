const dotenv = require("dotenv");

dotenv.config();

const keysOfPBI = [
  "Jira ID",
  "User Story Title",
  "Story",
  "Product Type",
  "Sprint",
  "Priority",
];

const keysOfSprintBacklog = [
  "Jira ID",
  "Issue Type",
  "Assignee",
  "Due Date",
  "User Story Title",
  "Story",
  "Status",
  "Priority",
];

const story = "story";
const subtask = "subtask";

module.exports = {
  DOMAIN: process.env.DOMAIN,
  APIKEY: process.env.APIKEY,
  SHEETID: process.env.SHEETID,
  EMAIL: process.env.EMAIL,
  PASS_EMAIL: process.env.PASS_EMAIL,
  KEYPBI: keysOfPBI,
  KEYSPRINTBACKLOG: keysOfSprintBacklog,
  STORY: story,
  SUBTASK: subtask,
};
