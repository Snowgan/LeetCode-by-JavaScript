/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    var temp = [];
    
    for(var i = 0, len = nums.length; i < len; i++) {
        var sub = target - nums[i];
        if(temp[sub] !== undefined) {
            return [temp[sub], i];
        }
        temp[nums[i]] = i;
    }
};

module.exports = twoSum;