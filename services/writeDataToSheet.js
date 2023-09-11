const { google } = require("googleapis");
const { authorize } = require("../configs/authorize");
const constants = require("../configs/constants");

/** data = [...] */
const writJiraIDForSheetPBI = async (data) => {
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
      // TODO (Developer) - Handle exception
      throw err;
    }
  }
};

const writeJiraIDForSheetSprintBacklog = async () => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });
};

module.exports = { writJiraIDForSheetPBI, writeJiraIDForSheetSprintBacklog };
