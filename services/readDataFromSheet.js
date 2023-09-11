const { google } = require("googleapis");
const { authorize } = require("../configs/authorize");
const { createObjectFromTwoArr } = require("../utils/createObjectFromTwoArr");

const getListMemberWithTask = async () => {
  const data = await getDataFromSprintBacklog(
    "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  );
  const result = data.reduce((acc, curr) => {
    const existingEntry = acc.find((item) => item.Assignee === curr.Assignee);
    const entryToAdd = { ...curr };
    //   delete entryToAdd.Assignee;

    if (existingEntry) {
      existingEntry.task.push(entryToAdd);
    } else {
      acc.push({
        Assignee: curr.Assignee,
        task: [entryToAdd],
      });
    }
    return acc;
  }, []);
  return result;
};

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
    if (item.hasOwnProperty("User Story Title")) {
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

const getDataFromSprintBacklog = async (spreadsheetId) => {
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
};

const getDataFromPBI = async (spreadsheetId) => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  const range = "Test!A:L";

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

const getDataFromSprintBacklogv2 = async (spreadsheetId) => {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  let ranges = ["SB5!5:5", "SB5!M4:X4", "SB5!A8:X"];

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
  getDataFromSprintBacklog,
  getListMemberWithTask,
  getDataFromPBI,
  getDataFromSprintBacklogv2,
};
