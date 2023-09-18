const dotenv = require("dotenv");

dotenv.config();

const rowStart = 8;

const listProduct = ["AICall", "AIVoice", "Chung"];

const listMembers = [
  "DuyenTTT",
  "HaiTD",
  "HuanND",
  "HuongTTT",
  "LamNDH",
  "LoiPNB",
  "MinhPQ",
  "TaiVD",
  "ThanhLD",
  "ThanhNX",
  "ThiemMV",
  "PhuongNT",
];

const keysOfPBI = [
  "Jira ID",
  "User Story Title",
  "Story",
  "Product Type",
  "Sprint",
  "Priority",
];

const keysOfSprintBacklogStory = [
  "Jira ID",
  "Issue Type",
  "Assignee",
  "Due Date",
  "User Story Title",
  "Story",
  "Status",
  "Priority",
];

const keysOfSprintBacklogSubtask = [
  "Jira ID",
  "Issue Type",
  "Assignee",
  "Due Date",
  "Story",
  "Status",
  "Note",
  "Points",
];

const story = "Story";
const subtask = "Subtask";

module.exports = {
  DOMAIN: process.env.DOMAIN,
  APIKEY: process.env.APIKEY,
  SHEETID: process.env.SHEETID,
  PBI: process.env.PBINAME,
  SPRINTBACKLOG: process.env.SPRINTBACKLOG,
  EMAIL: process.env.EMAIL,
  PASS_EMAIL: process.env.PASS_EMAIL,
  PROJECTID: process.env.PROJECT_ID,
  MEMBERS: listMembers,
  PRODUCTS: listProduct,
  KEYPBI: keysOfPBI,
  KEYSPRINTBACKLOG: keysOfSprintBacklogStory,
  KEYSUBTASK: keysOfSprintBacklogSubtask,
  STORY: story,
  SUBTASK: subtask,
  ROWSTART: rowStart,
};
