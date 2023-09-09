const keysOfPBI = [
  "Jira ID",
  "User Story Title",
  "Story",
  "Product Type",
  "Sprint",
  "Priority",
];

const checkPBI = (data) => {
  // danh sách item thiếu key
  const rowMissingKey = data
    .map((row, index) => {
      const missingKeys = keysOfPBI.filter((key) => !row.hasOwnProperty(key));

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
    rowMissingKey.every((row) => row.missingKeys.includes("Sprint"))
  ) {
    return data;
  } else {
    console.log("Some rows have missed some required keys:");
    rowMissingKey.forEach((row) => {
      console.log(
        `Row ${row.index + 2} miss value of ${row.missingKeys.join(", ")}`
      );
    });
    return false;
  }
};

module.exports = { checkPBI };
