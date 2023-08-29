const { google } = require("googleapis");
const { authorize } = require("./configs/authorize");

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

// data from sheet pbi (dung function batchGetValues o file read.js)
const createSheet = async (data) => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  // handle data
};

module.exports = {
  createSpreadSheet,
  createSheet,
};
