const { google } = require("googleapis");
const { authorize } = require("./configs/authorize");

const create = async (title) => {
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
    console.log(`Spreadsheet ID: ${spreadsheet.data.spreadsheetId}`);
    return spreadsheet.data.spreadsheetId;
  } catch (err) {
    throw err;
  }
};

create("test");
