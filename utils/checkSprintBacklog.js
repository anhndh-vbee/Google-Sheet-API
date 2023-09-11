const axios = require("axios");
const validateData = async () => {
  try {
    const response = await axios.get("http://localhost:8087/read/sb");
    const jsonData = response.data;
    const checkData = [
      "Jira ID",
      "Issue Type",
      "Assignee",
      "Due Date",
      "Story",
      "Status",
      "Note",
    ];
    let rowIndex = 8;
    for (const entry of jsonData) {
      if (entry.task && Array.isArray(entry.task)) {
        let hasAssigneeTime = false;
        for (const task of entry.task) {
          for (const key of Object.keys(task)) {
            if (checkData.includes(key) || key === task.Assignee) {
              hasAssigneeTime = true;
            } else {
              hasAssigneeTime = false;
              break;
            }
          }
          rowIndex++;
          if (!hasAssigneeTime) {
            console.log("Có người đã điền nhầm thời gian ở dòng:", rowIndex);
          }
        }
        rowIndex++;
      }
    }
  } catch (error) {
    console.error(`Lỗi trong quá trình đọc dữ liệu: ${error.message}`);
  }
};

validateData();
