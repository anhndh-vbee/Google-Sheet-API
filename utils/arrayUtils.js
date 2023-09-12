/* Convert array have many item to an array that each item in it have a specific size
 *
 * const largerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,...]
 * const smallerArrays = splitArrayIntoChunks(largerArray, 7);
 * => [[1, 2, 3, 4, 5, 6, 7], [ 8, 9, 10 ]]
 *
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

function flatArrayToGetJiraID(arr) {
  const result = arr.flatMap((subArr) => subArr.map((item) => item["Jira ID"]));
  return result;
}

/**
 *
 * @param {*} originListStoryWithSubtask
 * @param {*} newListSubTaskAfterCreated
 * @returns
 */

function combineArray(originListStoryWithSubtask, newListSubTaskAfterCreated) {
  const newListStoryWithSubtask = originListStoryWithSubtask.map(
    (story, index) => ({
      ...story,
      task: newListSubTaskAfterCreated[index].map((subtask) => ({
        ...subtask,
      })),
    })
  );
  return newListStoryWithSubtask;
}

module.exports = { splitArrayBySize, flatArrayToGetJiraID, combineArray };
