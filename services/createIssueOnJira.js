const constants = require("../configs/constants");

const createIssue = async (data, typeIssue, parentID) => {
  let issue;
  if (parentID && typeIssue === constants.SUBTASK) {
    issue = {
      fields: {
        project: {
          id: `${constants.PROJECTID}`,
        },
        issuetype: {
          id: "10005",
        },
        summary: "Subtask",
        description: `${data["Story"]}`,
        parent: {
          key: `${parentID}`,
        },
        assignee: {
          name: `${data["Assignee"]}`,
        },
      },
    };
  } else if (!parentID && typeIssue === constants.STORY) {
    issue = {
      fields: {
        project: {
          id: `${constants.PROJECTID}`,
        },
        issuetype: {
          id: "10001",
        },
        summary: `${data["User Story Title"]}`,
        description: `${data["Story"]}`,
        priority: {
          id: data["Priority"],
        },
      },
    };
  }

  const bodyData = `${JSON.stringify(issue)}`;

  const result = fetch(
    `https://${constants.DOMAIN}.atlassian.net/rest/api/2/issue`,
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
      return res;
    })
    .catch((err) => {
      throw err;
    });

  return result;
};

module.exports = { createIssue };
