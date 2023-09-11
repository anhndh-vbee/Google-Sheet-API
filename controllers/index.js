const { createSheet } = require("../services/create");
const {
  getDataFromSprintBacklog,
  getListMemberWithTask,
  getDataFromPBI,
  getDataFromSprintBacklogv2,
} = require("../services/readDataFromSheet");

const readController = async (req, res) => {
  // get data from sheet sprint backlog #5 v1
  // const result = await getDataFromSprintBacklog(
  //   "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  // );

  // get data from sheet sprint backlog #5 v2
  // const result = await getDataFromSprintBacklogv2(
  //   "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  // );

  // get data from sheet PBI
  const result = await getDataFromPBI(
    "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  );

  return res.json(result);
};

module.exports = { readController };
