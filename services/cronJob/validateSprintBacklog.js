const constants = require("../../configs/constants");

const validateTimeSpent = (data) => {
  if (data && data.length > 0) {
    const checkKeys = constants.KEYSUBTASK;
    let rowIndex = constants.ROWSTART;
    let arrErrorMsg = [];
    for (const story of data) {
      if (story.task && Array.isArray(story.task) && story.task.length > 0) {
        let isValid = false;
        for (const subtask of story.task) {
          for (const key of Object.keys(subtask)) {
            if (checkKeys.includes(key) || key === subtask.Assignee) {
              isValid = true;
            } else {
              isValid = false;
              break;
            }
          }
          rowIndex++;
          if (!isValid) {
            let errMsg = `
            <tr>
            <td>Line ${rowIndex}</td>
            <td>Wrong value (timespent)</td>
            </tr>`;
            arrErrorMsg.push(errMsg);
          }
        }
        rowIndex++;
      }
    }
    return arrErrorMsg;
  }
};

module.exports = { validateTimeSpent };
