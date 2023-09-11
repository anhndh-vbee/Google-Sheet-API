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

module.exports = {
  DOMAIN: process.env.DOMAIN,
  APIKEY: process.env.APIKEY,
  SHEETID: process.env.SHEETID,
  EMAIL: process.env.EMAIL,
  KEYPBI: keysOfPBI,
  KEYSPRINTBACKLOG: keysOfSprintBacklog,
};
