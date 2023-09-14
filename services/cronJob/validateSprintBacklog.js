const constants = require("../../configs/constants");
const { getDataFromSprintBacklog } = require("../readDataFromSheet");

const validateSubtask = async () => {
  let errMsg = "";
  try {
    const data = await getDataFromSprintBacklog(constants.SHEETID);
    const listKeys = constants.KEYSUBTASK;
    let rowIndex = 8;
    if (data && data.length > 0) {
      for (const entry of data) {
        if (entry.task && Array.isArray(entry.task)) {
          let hasAssigneeTime = false;
          for (const task of entry.task) {
            for (const key of Object.keys(task)) {
              if (listKeys.includes(key) || key === task.Assignee) {
                hasAssigneeTime = true;
              } else {
                hasAssigneeTime = false;
                break;
              }
            }
            rowIndex++;
            if (!hasAssigneeTime) {
              //   console.log("Có người đã điền nhầm thời gian ở dòng:", rowIndex);
              errMsg += `Có người đã điền nhầm thời gian ở dòng: ${rowIndex}`;
            }
          }
          rowIndex++;
        }
      }
    }
  } catch (error) {
    console.error(`Lỗi trong quá trình đọc dữ liệu: ${error.message}`);
  }
};

module.exports = { validateSubtask };
