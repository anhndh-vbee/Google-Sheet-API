const { createSheet } = require("../create");
const {
  getDataFromSprintBacklog,
  getListMemberWithTask,
  getValues,
  getDataFromPBI,
  getDataFromSprintBacklogv2,
} = require("../read");

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

const createController = async (req, res) => {
  const result = await createSheet();
  return res.json(result);
};

module.exports = { readController, createController };
