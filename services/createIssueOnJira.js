const constants = require("../configs/constants");

const convertToValidTime = (str) => str.replace(",", ".");

const createIssue = async (data, typeIssue, parentID) => {
  let issue;
  let timeSpent;
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
    if (data[`${data.Assignee}`]) {
      timeSpent = `${convertToValidTime(data[`${data.Assignee}`])}h`;
    }
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

  try {
    const response = await fetch(
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
    );
    if (!response.ok) {
      throw new Error(`Error creating issue: ${response.statusText}`);
    }
    const result = await response.json();
    if (parentID && typeIssue === constants.SUBTASK && timeSpent) {
      const worklogWithIssue = await fetch(
        `https://${constants.DOMAIN}.atlassian.net/rest/api/2/issue/${result.key}/worklog`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${constants.EMAIL}:${constants.APIKEY}`
            ).toString("base64")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ timeSpent: timeSpent }),
        }
      );

      if (!worklogWithIssue.ok) {
        throw new Error(
          `Error logging time spent: ${worklogWithIssue.statusText}`
        );
      }

      const worklogResult = await worklogWithIssue.json();
      const resultID = {
        keyWorklog: worklogResult.id,
        key: result.key,
      };
      return resultID;
    }

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { createIssue };
