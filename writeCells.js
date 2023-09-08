const { google } = require("googleapis");
const { authorize } = require("./configs/authorize");
const data = require("./test.js");

const main = async () => {
  try {
    const auth = await authorize();
    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4";
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "testPBI",
    });

    const dValues = response.data.values;

    let jiraIdIndex = 0;

    const regex = /^#5$|^#5\n#.*$|^#.*\n#5$/;

    const headerRow = dValues[0];
    const dColumnIndex = headerRow.indexOf("Sprint");
    const jiraIdColumnIndex = headerRow.indexOf("Jira ID");

    for (let i = 0; i < dValues.length; i++) {
      const dValue = dValues[i][dColumnIndex];
      if (dValue && regex.test(dValue) && jiraIdIndex < data.length) {
        const jiraId = data[jiraIdIndex]["Jira ID"];

        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `testPBI!${String.fromCharCode(65 + jiraIdColumnIndex)}${i + 1}`,
          valueInputOption: "RAW",
          resource: {
            values: [[jiraId]],
          },
        });

        jiraIdIndex++;
      }
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

main();
