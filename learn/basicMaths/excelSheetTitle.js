/**
 * https://leetcode.com/problems/excel-sheet-column-title/
 * @param {number} columnNumber
 * @return {string}
 */


var convertToTitle = function(columnNumber) {
  let offset
  let str = ''
  while (columnNumber) {
    offset = (columnNumber - 1) % 26
    str = String.fromCharCode(65 + offset) + str
    columnNumber = ~~((columnNumber - 1) / 26)
  }
  return str
};

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  let str = ''
  let res
  while (columnNumber) {
    res = (columnNumber % 26) || 26
    str = String.fromCharCode(64 + res) + str
    columnNumber = ~~((columnNumber - res) / 26)
  }
  return str
};