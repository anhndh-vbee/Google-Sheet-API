const {
  createIssuesFromSprintBacklog,
} = require("../services/bulkIssuesOnJira");
const {
  getListMemberWithTask,
  getDataFromPBI,
  getDataFromSprintBacklog,
} = require("../services/readDataFromSheet");

const readController = async (req, res) => {
  // get data from sheet sprint backlog #5 v1
  // const result = await getDataFromSprintBacklog(
  //   "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  // );

  // get data from sheet sprint backlog #5 v2
  // const result = await getDataFromSprintBacklog(
  //   "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  // );

  // get data from sheet PBI
  const result = await getDataFromPBI(
    "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  );

  // test create subtask
  // const result = await createIssuesFromSprintBacklog();
  return res.json(result);
};

const readSBController = async (req, res) => {
  const result = await getDataFromSprintBacklog(
    "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  );
  return res.json(result);
};

module.exports = { readController, readSBController };
