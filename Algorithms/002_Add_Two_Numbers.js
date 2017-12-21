/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const ListNode = require('./dataStructure').ListNode;

var addTwoNumbers = function(l1, l2) {
    var res = new ListNode(0),
        cur = res,
        carry = 0;
    while(l1 || l2) {
        var sum = new ListNode();
        sum.val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        if(sum.val >= 10) {
            carry = 1;
            sum.val -= 10;
        } else {
            carry = 0;
        }
        cur.next = sum;
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
        cur = cur.next;
    }
    
    if(carry > 0) {
        cur.next = new ListNode(1);
    }
    
    return res.next;
};

module.exports = addTwoNumbers;