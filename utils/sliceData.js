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

module.exports = { splitArrayBySize };
