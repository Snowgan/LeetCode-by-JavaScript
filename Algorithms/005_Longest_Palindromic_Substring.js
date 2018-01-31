/**
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.
 * @param {string} s
 * @return {string}
 */
/*var longestPalindrome = function(s) {
    var revs = s.split('').reverse().join(''),
    	len = s.length,
    	pals = '';
    outerLoop: for (var i = len; i > 0; i--) {
    	for (var j = 0; j <= len - i; j++) {
    		var temp = s.substr(j, i);
    		if (revs.indexOf(temp) > -1) {
    			pals = temp;
    			break outerLoop;
    		}
    	}
    }
    return pals;
};*/

var palindromeLen = function (s, i, j) {
	var len = s.length;
	while(i >= 0 && j < len && s[i] === s[j]) {
		i--;
		j++;
	}
	return j - i - 1;
}

var longestPalindrome = function(s) {
    var len = s.length,
    	start = 0,
    	end = 0;
	for (var i = 0; i < len; i++) {
		var pLen = Math.max(palindromeLen(s, i, i), palindromeLen(s, i, i + 1));
		if (pLen > end - start) {
			start = i - parseInt((pLen - 1) / 2);
			end = i + parseInt(pLen / 2);
		}
	}
	return s.substring(start, end + 1);
};

module.exports = longestPalindrome;
