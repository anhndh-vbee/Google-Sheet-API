const { authorize } = require("./configs/authorize");
const { google } = require("googleapis");

// convert from [[..., key, ...], [...], [..., key, ...]] => {key: [...]}
const convertData = (arr) => {
  const groupedItems = {};

  for (const subArr of arr) {
    const value = subArr[2];

    if (groupedItems.hasOwnProperty(value)) {
      groupedItems[value].push(subArr);
    } else {
      groupedItems[value] = [subArr];
    }
  }
  return groupedItems;
};

const createObjectFromTwoArr = (keys, values) => {
  const obj = {};

  keys.forEach((key, index) => {
    const value = values[index];
    if (value) {
      obj[key] = value;
    }
  });

  return obj;
};

async function getValues(spreadsheetId, range) {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  try {
    const result = await service.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    const data = result.data.values;
    const _result = convertData(data);
    return _result;
  } catch (err) {
    throw err;
  }
}

async function batchGetValues(spreadsheetId) {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  let ranges = [
    "Sprint Backlog #5!5:5",
    "Sprint Backlog #5!M4:X4",
    "Sprint Backlog #5!A8:X",
  ];

  try {
    const result = await service.spreadsheets.values.batchGet({
      spreadsheetId,
      ranges,
    });
    const data = result.data.valueRanges.map((range) => range.values);

    // danh sach header file sheet
    const header = data[0][0];
    header.push(...data[1][0]);

    // data
    const value = data[2];
    const _value = value.map((item) => createObjectFromTwoArr(header, item));

    return _value;
  } catch (err) {
    throw err;
  }
}

module.exports = { batchGetValues, getValues };
