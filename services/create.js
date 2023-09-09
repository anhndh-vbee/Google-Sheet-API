const { google } = require("googleapis");
const { authorize } = require("../configs/authorize");
const { getDataFromPBI } = require("./readDataFromSheet");

const createSpreadSheet = async (title) => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });
  const resource = {
    properties: {
      title,
    },
  };
  try {
    const spreadsheet = await service.spreadsheets.create({
      resource,
      fields: "spreadsheetId",
    });
    return spreadsheet.data.spreadsheetId;
  } catch (err) {
    throw err;
  }
};

const createSheet = async () => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  const result = await getDataFromPBI(
    "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  );
};

module.exports = {
  createSpreadSheet,
  createSheet,
};
