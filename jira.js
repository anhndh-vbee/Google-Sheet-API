const fetch = require("node-fetch");
const { getDataFromSprintBacklogv2, getDataFromPBI } = require("./read");

const createStoryFromSprintBacklog = async () => {
  const data = await getDataFromSprintBacklogv2(
    "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  );
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
  fetch("https://mrgon.atlassian.net/rest/api/2/issue/bulk", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        "hoanganh.axe.no.1@gmail.com:ATATT3xFfGF095a5PW1rkf_RgNMv9ZDf6ai1j9-yunAGIfDwGBH6uXTMHXMv1gYPV_oBi2VTA6De8ezXQ2h4M5tupCp3QBVFaYMG4jufgrUdJcS1vzLcOGL7nZJ4qNhasXuVejvrAcAh5-oULgegbVvs72D0mZIaEWT-101u4AnB6FAnOIka0Iw=FC9853B4"
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

const createStoryFromPBI = async () => {
  const data = await getDataFromPBI(
    "1-cYPOdl1XXs5RgF0rbCJaHwAicuBffGMf-kmxMJT-S4"
  );

  const _data = data.filter((item) => {
    if (item["Sprint"]) {
      return item["Sprint"].includes("#5");
    }
  });

  const _res = [..._data];
  const listIssues = _data.map((item) => {
    const issue = {
      fields: {
        project: {
          id: "10000",
        },
        issuetype: {
          id: "10001",
        },
        summary: item["User Story Title"],
        description: item["Story"],
      },
    };

    if (item["Priority"]) {
      issue.fields.priority = {
        id: item["Priority"],
      };
    }

    // Add additional conditional checks for other fields as needed

    return issue;
  });
  const bodyData = `${JSON.stringify({
    issueUpdates: listIssues,
  })}`;

  fetch("https://mrgon.atlassian.net/rest/api/2/issue/bulk", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        "hoanganh.axe.no.1@gmail.com:ATATT3xFfGF095a5PW1rkf_RgNMv9ZDf6ai1j9-yunAGIfDwGBH6uXTMHXMv1gYPV_oBi2VTA6De8ezXQ2h4M5tupCp3QBVFaYMG4jufgrUdJcS1vzLcOGL7nZJ4qNhasXuVejvrAcAh5-oULgegbVvs72D0mZIaEWT-101u4AnB6FAnOIka0Iw=FC9853B4"
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
        _res[i]["Jira ID"] = _arr[i]["key"];
      }
      return _res;
    })
    .then((result) => console.log(result))
    .catch((err) => {
      throw new Error(err);
    });
};

createStoryFromPBI();
