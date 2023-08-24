const { authorize } = require("./configs/authorize");
const { google } = require("googleapis");

async function getValues(spreadsheetId, range) {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  try {
    const result = await service.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    const numRows = result.data.values ? result.data.values.length : 0;
    console.log(`${numRows} rows retrieved.`);
    console.log(result.data.majorDimension);
    return result;
  } catch (err) {
    // TODO (developer) - Handle exception
    throw err;
  }
}

async function batchGetValues(spreadsheetId) {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  let ranges = ["Class Data!1:2", "Class Data!5:7"];
  try {
    const result = await service.spreadsheets.values.batchGet({
      spreadsheetId,
      ranges,
    });
    console.log(`${result.data.valueRanges.length} ranges retrieved.`);
    result.data.valueRanges.forEach((range) => {
      console.log(range.values);
    });
    return result;
  } catch (err) {
    // TODO (developer) - Handle exception
    throw err;
  }
}

getValues(
  "1p1OFXkxZ0hkoZrAwk4aTFQt6kH4PC6YAMomRcqjDhlw",
  "Sprint Backlog #5!C8:C"
);

// batchGetValues("1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms");
