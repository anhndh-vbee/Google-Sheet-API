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
    ];
    for (const entry of jsonData) {
      if (entry.task && Array.isArray(entry.task)) {
        let hasAssigneeTime = false;
        for (const task of entry.task) {
          for (const key of Object.keys(task)) {
            if (checkData.includes(key) || key === task.Assignee) {
              hasAssigneeTime = true;
            } else {
              hasAssigneeTime = false;
            }
          }
          if (hasAssigneeTime) {
            console.log("True");
          } else {
            console.log("False");
          }
        }
      }
    }
  } catch (error) {
    console.error(`Lỗi trong quá trình đọc dữ liệu: ${error.message}`);
  }
};

validateData();
