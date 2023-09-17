const { google } = require("googleapis");
const { authorize } = require("../configs/authorize");
const { createObjectFromTwoArr } = require("../utils/createObjectFromTwoArr");
const constants = require("../configs/constants");

const changeKeyObject = (obj) => {
  const updatedArray = obj.map((item) => {
    const updatedItem = { ...item };

    const keyMap = {
      "Độ ưu tiên": "Priority",
      // Add more key mappings as needed
    };

    for (const oldKey in keyMap) {
      if (updatedItem.hasOwnProperty(oldKey)) {
        updatedItem[keyMap[oldKey]] = updatedItem[oldKey];
        delete updatedItem[oldKey];
      }
    }

    return updatedItem;
  });

  return updatedArray;
};

const listStoryWithTask = (inputArray) => {
  let outputArray = [];
  let currentGroup = null;

  inputArray.forEach((item) => {
    if (
      item.hasOwnProperty("Issue Type") &&
      item["Issue Type"] === constants.STORY
    ) {
      currentGroup = {
        ...item,
        task: [],
      };
      outputArray.push(currentGroup);
    } else if (currentGroup) {
      currentGroup.task.push(item);
    }
  });
  return outputArray;
};

const getDataFromPBI = async (spreadsheetId) => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  const range = "PBI";

  try {
    const result = await service.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const data = result.data.values;

    // danh sach header file sheet
    const header = data[0];

    const value = data.slice(1);
    const _value = value.map((item) => createObjectFromTwoArr(header, item));

    return changeKeyObject(_value);
  } catch (err) {
    throw err;
  }
};

const getDataFromSprintBacklog = async (spreadsheetId) => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  let ranges = ["TestSB!5:5", "TestSB!M4:X4", "TestSB!A8:X"];

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

    return listStoryWithTask(_value);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getDataFromPBI,
  getDataFromSprintBacklog,
};
