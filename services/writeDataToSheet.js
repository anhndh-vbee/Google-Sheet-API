const { google } = require("googleapis");
const { authorize } = require("../configs/authorize");
const constants = require("../configs/constants");

const writeJiraIDForSheetPBI = async (data) => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  const spreadsheetId = constants.SHEETID;
  if (data && data.length > 0) {
    let values = data?.map((item) => [item]);
    let range = `Test!A2:A${data?.length + 1}`;

    try {
      await service.spreadsheets.values.update({
        spreadsheetId,
        range,
        valueInputOption: "RAW",
        resource: { values },
      });
    } catch (err) {
      throw err;
    }
  }
};

const writeJiraIDForSheetSprintBacklog = async (data) => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  const spreadsheetId = constants.SHEETID;

  if (data && data.length > 0) {
    let values = data?.map((item) => [item]);
    let range = `TestSB!A${constants.ROWSTART}:A${
      data?.length + constants.ROWSTART - 1
    }`;

    try {
      await service.spreadsheets.values.update({
        spreadsheetId,
        range,
        valueInputOption: "RAW",
        resource: { values },
      });
    } catch (err) {
      throw err;
    }
  }
};

module.exports = { writeJiraIDForSheetPBI, writeJiraIDForSheetSprintBacklog };
