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

async function getValues(spreadsheetId, range) {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  try {
    const result = await service.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    const data = result.data.values;
    // const _result = convertData(data);
    return data;
  } catch (err) {
    throw err;
  }
}

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

async function getDataFromSprintBacklog(spreadsheetId) {
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

async function getDataFromPBI(spreadsheetId) {
  const auth = await authorize();
  const service = google.sheets({ version: "v4", auth });

  const range = "PBI!A:L";

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
}

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

async function getDataFromSprintBacklogv2(spreadsheetId) {
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

    return listStoryWithTask(_value);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getDataFromSprintBacklog,
  getValues,
  getListMemberWithTask,
  getDataFromPBI,
  getDataFromSprintBacklogv2,
};
