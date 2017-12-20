describe('LeetCode', function () {
	var te = require('../Algorithms/testEntry');

	it('001_Two_Sum', function () {
		var nums = [2, 7, 11, 15],
			target = 9;
		expect(te.twoSum(nums, target)).toEqual([0, 1]);
	})

	
})