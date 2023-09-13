const cron = require('node-cron');
const { authorize } = require('../configs/authorize');
const { google } = require('googleapis');

const spreadsheetId = '1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4';
let initTitleValues = {};

const trimTitleValues = (values) => {
    return values.map(value => value.trim());
}

const getSheets = async () => {
    const auth = await authorize();
    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.get({
        spreadsheetId: spreadsheetId,
    });
    const sheetsList = response.data.sheets;
    for (const sheet of sheetsList) {
        const sheetName = sheet.properties.title;
        const range = `${sheetName}!1:1`;
        const valuesResponse = await sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: range,
        });

        const titleValues = trimTitleValues(valuesResponse.data.values[0]);
        initTitleValues[sheetName] = titleValues;
    }
}

getSheets();

// Kiểm tra giá trị dòng 1 trong các sheets sau 1h
cron.schedule('*/1 * * *', async () => {
    const auth = await authorize();
    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.get({
        spreadsheetId: spreadsheetId,
    });
    const sheetsList = response.data.sheets;
    for (const sheet of sheetsList) {
        const sheetName = sheet.properties.title;
        const range = `${sheetName}!1:1`;
        const valuesResponse = await sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: range,
        });

        const currentTitleValues = trimTitleValues(valuesResponse.data.values[0]);
        const removedColumnNames = initTitleValues[sheetName].filter((columnName) => !currentTitleValues.includes(columnName));

        if (removedColumnNames.length > 0) {
            console.log(`Removed column: "${removedColumnNames.join(', ')}" in Sheet "${sheetName}"`);
        }
        initTitleValues[sheetName] = currentTitleValues;
    }
});
