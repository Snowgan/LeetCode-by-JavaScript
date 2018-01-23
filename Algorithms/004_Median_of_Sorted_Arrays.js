/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. 
 * The overall run time complexity should be O(log (m+n)).
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findKth = function(nums1, nums2, k) {
    var len1 = nums1.length,
        len2 = nums2.length;
    if(len1 > len2) {
        return findKth(nums2, nums1, k); // 保证传参的第一个数组长度小于等于第二个数组长度
    }
    if (len1 === 0) {
        return nums2[k-1];
    }
    if (k === 1) {
        return Math.min(nums1[0], nums2[0]);
    }
    
    var rc1 = Math.min(parseInt(k / 2), len1),
        rc2 = k - rc1;

    if(nums1[rc1 - 1] < nums2[rc2 - 1]) {
        return findKth(nums1.slice(rc1), nums2, k - rc1);
    } else if (nums1[rc1 - 1] > nums2[rc2 - 1]) {
        return findKth(nums1, nums2.slice(rc2), k - rc2);
    } else {
        return nums1[rc1 - 1];
    }
    
};

var findMedianSortedArrays = function(nums1, nums2) {
    var len = nums1.length + nums2.length;
    if (len % 2 === 1) {
        return findKth(nums1, nums2, (len + 1) / 2);
    } else {
        return (findKth(nums1, nums2, len / 2) + findKth(nums1, nums2, len / 2 + 1)) / 2;
    }
};

module.exports = findMedianSortedArrays;