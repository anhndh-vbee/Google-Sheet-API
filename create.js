const { google } = require("googleapis");
const { authorize } = require("./configs/authorize");
const { getValues } = require("./read");

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

// data from sheet pbi (dung function getValues o file read.js)
const createSheet = async () => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  // get data
  const dataFromPBI = getValues(
    "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4",
    "PBI!A:L"
  );

  return dataFromPBI;
  // handle data
};

module.exports = {
  createSpreadSheet,
  createSheet,
};
