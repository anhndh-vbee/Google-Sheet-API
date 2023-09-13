/**
 *
 * @param {*} data
 * @param {*} keys
 * @returns if checkSheet pass => return object else return string
 */
const checkSheet = (data, keys) => {
  // danh sách item thiếu key
  const rowMissingKey = data
    .map((row, index) => {
      const missingKeys = keys.filter((key) => !row.hasOwnProperty(key));

      // nếu key 'Jira ID' bị thiếu thì tạo key và gán giá trị mặc định là ''
      if (missingKeys.includes("Jira ID")) {
        row["Jira ID"] = "";
        missingKeys.splice(missingKeys.indexOf("Jira ID"), 1);
      }

      return { index, missingKeys };
    })
    .filter((row) => row.missingKeys.length > 0);

  if (
    rowMissingKey.length === 0 ||
    rowMissingKey.every((row) => row.missingKeys.includes("Jira ID"))
  ) {
    return data;
  } else {
    const errorMessages = rowMissingKey.map((row) => {
      return `Row ${row.index + 2} missing value of ${row.missingKeys.join(
        ", "
      )}`;
    });
    const errMsg = `Some rows have missed some required keys:\n${errorMessages.join(
      "\n"
    )}`;

    return errMsg;
  }
};

module.exports = { checkSheet };
