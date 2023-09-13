const { google } = require("googleapis");
const { authorize } = require("./configs/authorize");
const data = require("./test.js");
const fs = require("fs");
const path = "./data/three.json";

const writeJiraIdPBI = async () => {
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
};

const writeJiraIdSprintBacklog = async () => {
  try {
    const auth = await authorize();
    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4";
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "testSBTQ",
    });

    const sheetValues = response.data.values;
    const headerRow = sheetValues[4];
    const jiraIdColumnIndex = headerRow.indexOf("Jira ID");
    const issueTypeColumnIndex = headerRow.indexOf("Issue Type");
    fs.readFile(path, "utf8", async (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
      try {
        const jsonData = JSON.parse(data);
        let rowIndex = -1;
        for (let i = 0; i < sheetValues.length; i++) {
          let cValue = sheetValues[i][issueTypeColumnIndex];
          if (cValue === "Story" || cValue === "Sub-task") {
            rowIndex = i;
            break;
          }
        }

        const updateValues = [];
        for (const entry of jsonData) {
          const jiraId = entry["Jira ID"];
          if (rowIndex !== -1) {
            updateValues.push([jiraId]);
          }
          rowIndex++;
          if (entry.task && Array.isArray(entry.task)) {
            for (const task of entry.task) {
              const taskJiraId = task["Jira ID"];
              if (rowIndex !== -1) {
                updateValues.push([taskJiraId]);
              }
              rowIndex++;
            }
          }
        }

        if (updateValues.length > 0) {
          await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: `testSBTQ!${String.fromCharCode(65 + jiraIdColumnIndex)}${rowIndex - updateValues.length + 1}:${String.fromCharCode(65 + jiraIdColumnIndex)}`,
            valueInputOption: "RAW",
            resource: {
              values: updateValues,
            },
          });
          const delayMs = 100;
          await new Promise((resolve) => setTimeout(resolve, delayMs));
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

writeJiraIdSprintBacklog();
