const constants = require("../configs/constants");

/**
 *
 * @param {*} data
 * @param {*} keys
 * @returns if checkSheet pass => return object else return string
 */
const checkSheet = (data, keys) => {
  // danh sách item thiếu key
  const rowMissingKey = data
    .map((row, index) => {
      const missingKeys = keys.filter((key) => !row.hasOwnProperty(key));

      // nếu key 'Jira ID' bị thiếu thì tạo key và gán giá trị mặc định là ''
      if (missingKeys.includes("Jira ID")) {
        row["Jira ID"] = "";
        missingKeys.splice(missingKeys.indexOf("Jira ID"), 1);
      }

      return { index, missingKeys };
    })
    .filter((row) => row.missingKeys.length > 0);

  if (
    rowMissingKey.length === 0 ||
    rowMissingKey.every((row) => row.missingKeys.includes("Jira ID"))
  ) {
    return data;
  } else {
    if (keys === constants.KEYPBI) {
      const errorMessages = rowMissingKey.map((row) => {
        return `<tr><td>Row ${
          row.index + 2
        } missing value of ${row.missingKeys.join(", ")}</td></tr>`;
      });
      const errMsg = `<tr>Some rows have missed some required keys:</tr>
      ${errorMessages.join("")}`;

      return errMsg;
    }

    if (keys === constants.KEYSPRINTBACKLOG) {
      const errorMessages = rowMissingKey.map((row) => {
        return `<tr><td>Story number ${
          row.index + 1
        } missing value of ${row.missingKeys.join(", ")}</td></tr>`;
      });

      const errMsg = `
        <tr>Some stories have missed some required keys:</tr>
        ${errorMessages.join("")}
      `;

      return errMsg;
    }
  }
};

// const spreadsheetId = constants.SHEETID;
// let initTitleValues = {};

// const trimTitleValues = (values) => {
//   return values.map((value) => value.trim());
// };

// const getSheets = async () => {
//   const auth = await authorize();
//   const sheets = google.sheets({ version: "v4", auth });

//   const response = await sheets.spreadsheets.get({
//     spreadsheetId: spreadsheetId,
//   });
//   const sheetsList = response.data.sheets;
//   for (const sheet of sheetsList) {
//     const sheetName = sheet.properties.title;
//     const range = `${sheetName}!1:1`;
//     const valuesResponse = await sheets.spreadsheets.values.get({
//       spreadsheetId: spreadsheetId,
//       range: range,
//     });

//     const titleValues = trimTitleValues(valuesResponse.data.values[0]);
//     initTitleValues[sheetName] = titleValues;
//   }
// };

// getSheets();

// // Kiểm tra giá trị dòng 1 trong các sheets sau 1h
// async function checkColumnSheet() {
//   const auth = await authorize();
//   const sheets = google.sheets({ version: "v4", auth });

//   const response = await sheets.spreadsheets.get({
//     spreadsheetId: spreadsheetId,
//   });
//   const sheetsList = response.data.sheets;
//   for (const sheet of sheetsList) {
//     const sheetName = sheet.properties.title;
//     const range = `${sheetName}!1:1`;
//     const valuesResponse = await sheets.spreadsheets.values.get({
//       spreadsheetId: spreadsheetId,
//       range: range,
//     });

//     const currentTitleValues = trimTitleValues(valuesResponse.data.values[0]);
//     const removedColumnNames = initTitleValues[sheetName].filter(
//       (columnName) => !currentTitleValues.includes(columnName)
//     );

//     if (removedColumnNames.length > 0) {
//       console.log(
//         `Removed column: "${removedColumnNames.join(
//           ", "
//         )}" in Sheet "${sheetName}"`
//       );
//     }
//     initTitleValues[sheetName] = currentTitleValues;
//   }
// }

module.exports = { checkSheet };
