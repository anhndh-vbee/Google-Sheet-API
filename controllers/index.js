const { batchGetValues } = require("../read");

const readController = async (req, res) => {
  const result = await batchGetValues(
    "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  );
  return res.json(result);
};

module.exports = { readController };
