const fetch = require("node-fetch");
const dotenv = require("dotenv");
const {
  getDataFromSprintBacklogv2,
  getDataFromPBI,
} = require("./readDataFromSheet");
const {
  splitArrayBySize,
  flatArrayToGetJiraID,
} = require("../utils/arrayUtils");
const constants = require("../configs/constants");
const { checkSheet } = require("../utils/checkSheet");
const { writJiraIDForSheetPBI } = require("./writeDataToSheet");

dotenv.config();

// bulk stories
const createStories = async (data) => {
  const cloneData = [...data];

  // begin convert data to pass to Jira
  const listIssues = data.map((item) => ({
    fields: {
      project: {
        id: "10000",
      },
      issuetype: {
        id: "10001",
      },
      summary: item["User Story Title"],
      description: item["Story"],
      priority: {
        id: item["Priority"],
      },
    },
  }));
  const bodyData = `${JSON.stringify({
    issueUpdates: listIssues,
  })}`;
  // end

  // begin call api to create issue Jira
  const result = fetch(
    `https://${constants.DOMAIN}.atlassian.net/rest/api/2/issue/bulk`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${constants.EMAIL}:${constants.APIKEY}`
        ).toString("base64")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: bodyData,
    }
  ).then(async (response) => {
    const res = await response.json();
    const listIssueCreated = res.issues;
    for (let i = 0; i < cloneData.length; i++) {
      cloneData[i]["Jira ID"] = listIssueCreated[i]["key"];
    }
    return cloneData;
  });
  // end call api

  return result;
};

// bulk subtask
const createSubtasks = async (data, parentId) => {
  const cloneData = [...data];

  // begin convert data to pass to Jira
  const listIssues = data.map((item) => ({
    fields: {
      project: {
        id: "10000",
      },
      issuetype: {
        id: "10005",
      },
      parent: {
        key: `${parentId}`,
      },
      assignee: {
        name: item["Assignee"],
      },
      summary: item["User Story Title"],
      description: item["Story"],
      priority: {
        id: item["Priority"],
      },
    },
  }));
  const bodyData = `${JSON.stringify({
    issueUpdates: listIssues,
  })}`;
  // end

  // begin call api to create issue Jira
  const result = fetch(
    `https://${constants.DOMAIN}.atlassian.net/rest/api/2/issue/bulk`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${constants.EMAIL}:${constants.APIKEY}`
        ).toString("base64")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: bodyData,
    }
  ).then(async (response) => {
    const res = await response.json();
    const listIssueCreated = res.issues;
    for (let i = 0; i < cloneData.length; i++) {
      cloneData[i]["Jira ID"] = listIssueCreated[i]["key"];
    }
    return cloneData;
  });
  // end call api

  return result;
};

const createStoriesFromPBI = async () => {
  const value = await getDataFromPBI(constants.SHEETID);

  const check = checkSheet(value, constants.KEYPBI);

  if (check) {
    const listInputData = splitArrayBySize(check, 25);
    const result = await Promise.all(
      listInputData.map((data) => createStories(data))
    );
    let listJiraID = flatArrayToGetJiraID(result);
    await writJiraIDForSheetPBI(listJiraID);
    return listJiraID;
  } else {
    return "Not ok";
  }
};

createStoriesFromPBI();

const createIssuesFromSprintBacklog = async () => {
  const data = await getDataFromSprintBacklogv2(constants.SHEETID);
  const check = checkSheet(data, constants.KEYSPRINTBACKLOG);

  if (check) {
    const listInputData = splitArrayBySize(check, 25);
    const result = await Promise.all(
      listInputData.map((data) => createSubtasks(data?.task, data["Jira ID"]))
    );
    return result;
  }
};

module.exports = { createStoriesFromPBI, createIssuesFromSprintBacklog };
