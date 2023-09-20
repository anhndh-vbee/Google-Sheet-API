const { google } = require("googleapis");
const constants = require("../configs/constants");
const { authorize } = require("../configs/authorize");
const { createObjectFromTwoArr } = require("../utils/createObjectFromTwoArr");
const { isArraySubset } = require("../utils/arrayUtils");

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

const getDataFromPBI = async () => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  const spreadsheetId = constants.SHEETID;
  const range = constants.PBI;

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

const getDataFromSprintBacklog = async () => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  const spreadsheetId = constants.SHEETID;
  const range = constants.SPRINTBACKLOG;

  try {
    const result = await service.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    const data = result.data.values;

    // header
    const header = data.find((item) => item.includes("Jira ID"));
    const listMemberOfSprint = data
      .find((item) => isArraySubset(constants.MEMBERS, item))
      .filter((subItem) => subItem !== "");
    header.push(...listMemberOfSprint);

    // value
    let value;
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].includes("AICall") ||
        data[i].includes("AIVoice") ||
        data[i].includes("Chung")
      ) {
        value = data.slice(i);
        break;
      }
    }
    if (value) {
      const _value = value.map((item) => createObjectFromTwoArr(header, item));
      return listStoryWithTask(_value);
    }
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getDataFromPBI,
  getDataFromSprintBacklog,
};
