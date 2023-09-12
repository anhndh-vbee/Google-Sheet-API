/**
 *
 * @param {*} array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,...]
 * @param {*} size = 7
 * @returns [[1, 2, 3, 4, 5, 6, 7], [ 8, 9, 10 ]]
 */

function splitArrayBySize(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    result.push(chunk);
  }
  return result;
}

/**
 * @param {*} arr = [[ {key:val1, ... }, {key:val2, ... } ], [...], [...]]
 * @returns [val1, val2, ...]
 */

function flatArrayToGetValueByKey(arr, key) {
  const result = arr.flatMap((subArr) => subArr.map((item) => item[`${key}`]));
  return result;
}

/**
 *
 * @param {*} originArr = [{..., task: ["Jira ID": "..."]}, {...}]
 * @param {*} arrNeedMerged  = [[{"Jira ID" : "...", ... }], ...]
 * @param {*} key
 * @returns  Copy each subitem in each item of arrNeedMerged to field task in originArr
 */

function mergeArrayWithKey(originArr, arrNeedMerged, key) {
  const newArr = originArr.map((item, index) => ({
    ...item,
    [key]: arrNeedMerged[index].map((subtask) => ({
      ...subtask,
    })),
  }));
  return newArr;
}

/**
 *
 * @param {*} data
 * @param {*} key
 * @param {*} fieldWantToGet
 * @returns
 */

function extractFieldAndGetValueByKey(data, key, fieldWantToGet) {
  const newArr = data.reduce((ids, item) => {
    ids.push(item[key]);
    if (item[fieldWantToGet]) {
      const subItem = item[fieldWantToGet]
        .filter((smItem) => smItem[key])
        .map((smItem) => smItem[key]);
      ids.push(...subItem);
    }
    return ids;
  }, []);
  return newArr;
}

module.exports = {
  splitArrayBySize,
  flatArrayToGetValueByKey,
  mergeArrayWithKey,
  extractFieldAndGetValueByKey,
};
