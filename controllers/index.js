const { createSheet } = require("../create");
const { batchGetValues, getListMemberWithTask, getValues } = require("../read");

const readController = async (req, res) => {
  // const result = await getValues(
  //   "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4",
  //   "Sprint Backlog #5!A8:X"
  // );

  // const result = await batchGetValues(
  //   "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  // );

  const result = await getListMemberWithTask();

  return res.json(result);
};

const createController = async (req, res) => {
  const result = await createSheet();
  return res.json(result);
};

module.exports = { readController, createController };
