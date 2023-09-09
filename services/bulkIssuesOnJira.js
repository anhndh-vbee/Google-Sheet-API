const fetch = require("node-fetch");
const dotenv = require("dotenv");
const {
  getDataFromSprintBacklogv2,
  getDataFromPBI,
} = require("./readDataFromSheet");
const { checkPBI } = require("../utils/checkPBI");
const { splitArrayBySize } = require("../utils/sliceData");
const constants = require("../configs/constants");

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

const createStoriesFromPBI = async () => {
  console.log(constants.SHEETID);
  const value = await getDataFromPBI(constants.SHEETID);

  const check = checkPBI(value);

  if (check) {
    const listInputData = splitArrayBySize(check, 25);
    const result = await Promise.all(
      listInputData.map((data) => createStories(data))
    );
    console.log(result);
    return result;
  } else {
    return "Not ok";
  }
};

const createStoryFromSprintBacklog = async () => {
  const data = await getDataFromSprintBacklogv2(constants.SHEETID);
  const _res = [...data];
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
      assignee: item["Assignee"],
      duedate: item["Due Date"],
      priority: {
        id: item["Priority"],
      },
    },
  }));
  const bodyData = `${JSON.stringify({
    issueUpdates: listIssues,
  })}`;
  fetch(`https://${constants.DOMAIN}.atlassian.net/rest/api/2/issue/bulk`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${constants.EMAIL}:${constants.APIKEY}`
      ).toString("base64")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: bodyData,
  })
    .then(async (response) => {
      const res = await response.json();
      const _arr = res.issues;
      for (let i = 0; i < _res.length; i++) {
        _res[i]["Jira ID"] = _arr[i].key;
      }
      return _res;
    })
    .then((result) => console.log(result))
    .catch((err) => {
      throw new Error(err);
    });
};

createStoriesFromPBI();

module.exports = { createStoriesFromPBI, createStoryFromSprintBacklog };
