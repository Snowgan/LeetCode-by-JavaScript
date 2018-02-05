/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if (numRows < 2) {
		return s;
	}
	var cirLen = 2 * numRows - 2,
	zigzag = '';
	for (var i = 0; i < numRows; i++) {
		var j = 0;
		while(s[i+j]) {
			zigzag += s[i+j];
			if (i+j !== cirLen-i+j && i !== 0 && s[cirLen-i+j]) {
				zigzag += s[cirLen-i+j]
			}
			j += cirLen;
		}
	}
	return zigzag;
};

module.exports = convert;

