const fetch = require("node-fetch");
const {
  getDataFromSprintBacklog,
  getDataFromPBI,
} = require("./readDataFromSheet");
const {
  splitArrayBySize,
  flatArrayToGetValueByKey,
  mergeArrayWithKey,
  extractFieldAndGetValueByKey,
} = require("../utils/arrayUtils");
const constants = require("../configs/constants");
const { checkSheet } = require("../utils/checkSheet");
const {
  writeJiraIDForSheetPBI,
  writeJiraIDForSheetSprintBacklog,
} = require("./writeDataToSheet");

// bulk stories
const createStories = async (data) => {
  const cloneData = [...data];

  // begin convert data to pass to Jira
  const listIssues = data.map((item) => ({
    fields: {
      project: {
        id: `${constants.PROJECTID}`,
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
        id: `${constants.PROJECTID}`,
      },
      issuetype: {
        id: "10005",
      },
      summary: "Subtask",
      parent: {
        key: `${parentId}`,
      },
      assignee: {
        name: item["Assignee"],
      },
      description: item["Story"],
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
  )
    .then(async (response) => {
      const res = await response.json();
      const listIssueCreated = res.issues;

      for (let i = 0; i < cloneData.length; i++) {
        cloneData[i]["Jira ID"] = listIssueCreated[i]["key"];
      }
      return cloneData;
    })
    .catch((error) => {
      throw error;
    });
  // end call api

  return result;
};

const createStoriesFromPBI = async () => {
  const value = await getDataFromPBI();

  const check = checkSheet(value, constants.KEYPBI);

  if (typeof check === "object") {
    const listInputData = splitArrayBySize(check, 25);
    const result = await Promise.all(
      listInputData.map((data) => createStories(data))
    );
    let listJiraID = flatArrayToGetValueByKey(result, "Jira ID");
    await writeJiraIDForSheetPBI(listJiraID);
    return listJiraID;
  } else {
    return "Not ok";
  }
};

const createIssuesFromSprintBacklog = async () => {
  const data = await getDataFromSprintBacklog();
  const check = checkSheet(data, constants.KEYSPRINTBACKLOG);

  if (typeof check === "object") {
    const listInputData = splitArrayBySize(check, 25);
    const result = await Promise.all(
      listInputData.map((stories) => {
        return Promise.all(
          stories.map((story) => createSubtasks(story.task, story["Jira ID"]))
        );
      })
    );
    // return result[0];
    if (result && result[0].length > 0) {
      const updateSprintBacklog = mergeArrayWithKey(check, result[0], "task");
      const listJiraID = extractFieldAndGetValueByKey(
        updateSprintBacklog,
        "Jira ID",
        "task"
      );
      if (listJiraID && listJiraID.length > 0) {
        writeJiraIDForSheetSprintBacklog(listJiraID);
      }
      return "OK";
    }
  }
};

module.exports = { createStoriesFromPBI, createIssuesFromSprintBacklog };
