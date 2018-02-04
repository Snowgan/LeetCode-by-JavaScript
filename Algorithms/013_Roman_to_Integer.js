/**
 * Given a roman numeral, convert it to an integer.
 * I - 1, V - 5, X - 10, L - 50, C - 100, D - 500, M - 1000
 */
const baseMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
const baseKey = Object.keys(baseMap);

const roman2int = function (romanStr) {
  const len = romanStr.length;
  let res = 0;
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return baseMap[romanStr];
  }
  for (let i = 0, j = 1; i < len; i++, j = i + 1) {
    if (baseKey.indexOf(romanStr[i]) >= baseKey.indexOf(romanStr[j])) {
      res += baseMap[romanStr[i]];
    } else {
      res += baseMap[romanStr[j]] - baseMap[romanStr[i]];
      i++;
    }
  }
  return res;
}

module.exports = roman2int;
