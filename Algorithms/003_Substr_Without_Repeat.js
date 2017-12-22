/**
 * Given a string, find the length of the longest substring without repeating characters.
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    var sub = '',
        curSize = 0;
    for (let i = 0, len = s.length; i < len; i++) {
        var idx = sub.indexOf(s[i]);  // Store the duplicated char index
        if (idx === -1) {
            sub += s[i];
            if (i === len - 1 && curSize < sub.length) {
                curSize = sub.length;
            }
        } else {
            if (curSize < sub.length) {
                curSize = sub.length;
            }
            if (sub !== s[i]) {
                sub += s[i];
                // The next search substring will be started after the duplicated chat index
                sub = sub.slice(idx + 1);
            }
        }
    }
    return curSize;
};

module.exports = lengthOfLongestSubstring;