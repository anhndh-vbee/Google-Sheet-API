const {
  createIssuesFromSprintBacklog,
  createStoriesFromPBI,
} = require("../services/bulkIssuesOnJira");

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

module.exports = { bulkCreateStoriesPBI, bulkCreateSubtask };
