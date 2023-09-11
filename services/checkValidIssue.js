const checkValidId = (id) => {
  const regexPattern = /^SCRUM-[1-9]\d*$/;

  return regexPattern.test(id);
};

module.exports = { checkValidId };
