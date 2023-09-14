const {
  createIssuesFromSprintBacklog,
  createStoriesFromPBI,
} = require("../services/bulkIssuesOnJira");
const { getDataFromSprintBacklog } = require("../services/readDataFromSheet");

const bulkCreateStoriesPBI = async (req, res) => {
  // create story in sheet PBI
  const result = await createStoriesFromPBI();
  return res.json(result);
};

const bulkCreateSubtask = async (req, res) => {
  // create subtask in sheet Sprint Backlog
  const result = await createIssuesFromSprintBacklog();
  return res.json(result);
};

const readSBController = async (req, res) => {
  const result = await getDataFromSprintBacklog(
    "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  );
  return res.json(result);
};

module.exports = { bulkCreateStoriesPBI, readSBController, bulkCreateSubtask };
