const fetch = require("node-fetch");
const constants = require("../configs/constants");
const { checkValidId } = require("./checkValidIssue");

/**
 *
 * @param {*} id
 * @returns if id is valid and issue exists, return object else return false
 */
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
      .then(async (response) => {
        const res = await response.json();
        if (res.errorMessages) {
          return false;
        }
        return res;
      })
      .catch((err) => {
        throw err;
      });

    if (result.errorMessages) {
      return false;
    }
    return result;
  } else {
    return false;
  }
};

module.exports = { getIssue };
