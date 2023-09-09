const createObjectFromTwoArr = (keys, values) => {
  const obj = {};

  keys.forEach((key, index) => {
    const value = values[index];
    if (value) {
      obj[key] = value;
    }
  });

  return obj;
};

module.exports = { createObjectFromTwoArr };
