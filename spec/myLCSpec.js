describe('LeetCode', function () {
	var te = require('../Algorithms/testEntry'),
	    data = require('../Algorithms/dataStructure');

	it('001_Two_Sum', function () {
		var nums = [2, 7, 11, 15],
			target = 9;
		expect(te.twoSum(nums, target)).toEqual([0, 1]);
	})

	it('002_Add_Two_Numbers', function () {
		var ListNode = data.ListNode;
		var l1 = new ListNode(2);
		var l2 = new ListNode(5);
		l1.next = new ListNode(4);
		l1.next.next = new ListNode(3);
		l2.next = new ListNode(6);
		l2.next.next = new ListNode(4);
		var result = te.addTwoNumbers(l1, l2);
		expect(result.val).toEqual(7);
		expect(result.next.val).toEqual(0);
		expect(result.next.next.val).toEqual(8);
	})

	
})