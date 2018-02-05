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
	
	it('003_Substr_Without_Repeat', function () {
		var s1 = 'abcabcbb',
				s2 = 'bbbbbb',
				s3 = 'pwwkew',
				s4 = 'jdhfuenjfuhhkie';
		expect(te.lengthOfLongestSubstring(s1)).toEqual(3);
		expect(te.lengthOfLongestSubstring(s2)).toEqual(1);
		expect(te.lengthOfLongestSubstring(s3)).toEqual(3);
		expect(te.lengthOfLongestSubstring(s4)).toEqual(7);
	})

	it('004_Median_of_Sorted_Arrays', function () {
		var s1 = [1, 3],
				s2 = [2],
				s3 = [1, 2],
				s4 = [3, 4];
				s5 = [3, 6, 7, 10, 16],
				s6 = [1, 10, 22];
		expect(te.findMedianSortedArrays(s1, s2)).toEqual(2);
		expect(te.findMedianSortedArrays(s3, s4)).toEqual(2.5);
		expect(te.findMedianSortedArrays(s5, s6)).toEqual(8.5);
	})

	it('005_Longest_Palindromic_Substring', function () {
		var s1 = 'zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir',
		    s2 = 'sesabcbajfie';
		expect(te.longestPalindrome(s1)).toBe('gykrkyg');
		expect(te.longestPalindrome(s2)).toBe('abcba');
	})

	it('006_ZigZag_Conversion', function () {
		var s1 = 'PAYPALISHIRING',
			  s2 = 'JDHFOIEKJLFOLSLJFMLKEIFJOERGMSLEGIJSIE';
		expect(te.convert(s1, 3)).toBe('PAHNAPLSIIGYIR');
		expect(te.convert(s2, 6)).toBe('JFELDLOKISEHJLLFMGFKSMJGIEOELFORJIIJES');
	})

	it('013_Roman_to_Integer', function () {
		var s1 = 'MMMCMXCIX',
				s2 = 'XXI',
				s3 = 'XLIX';
		expect(te.roman2int(s1)).toEqual(3999);
		expect(te.roman2int(s2)).toEqual(21);
		expect(te.roman2int(s3)).toEqual(49);
	})
})