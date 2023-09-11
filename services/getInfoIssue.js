const fetch = require("node-fetch");
const constants = require("../configs/constants");
const { checkValidId } = require("./checkValidIssue");

const getIssue = (id) => {
  if (checkValidId(id)) {
    const result = fetch(
      `https://${constants.DOMAIN}.atlassian.net/rest/api/2/issue/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${constants.EMAIL}:${constants.APIKEY}`
          ).toString("base64")}`,
          Accept: "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.error(err));
    return result;
  } else {
    return false;
  }
};

module.exports = { getIssue };
