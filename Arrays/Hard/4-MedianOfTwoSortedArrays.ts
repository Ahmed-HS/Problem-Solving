/**
 * Hard
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	/**
	 * We use binary search to find how many numbers
	 * from nums1 should be included in the left half.
	 * The total number of elements in the left half is half of the total length.
	 * If the nums2 array is shorter than the nums1 array,
	 * we swap the arrays to optimize the binary search,
	 * by reducing the search range.
	 */
	if (nums2.length < nums1.length) {
		[nums1, nums2] = [nums2, nums1];
	}
	const totalLength = nums1.length + nums2.length;
	const halfLength = Math.trunc(totalLength / 2);
	/**
	 * The minimum number of elements from nums1 that
	 * could be included in the left half is 0.
	 * The maximum number of elements from nums1 that
	 * could be included in the left half is nums1.length.
	 */
	let start = 0;
	let end = nums1.length;
	while (start <= end) {
		// The number of elements from nums1 and nums2 that should be included in the left half.
		const num1Count = start + Math.trunc((end - start) / 2);
		const num2Count = halfLength - num1Count;
		// The maximum number from nums1 that should be included in the left half.
		const num1Left = num1Count === 0 ? -Infinity : nums1[num1Count - 1];
		// The minimum number from nums1 that should be included in the right half.
		const num1Right =
			num1Count === nums1.length ? Infinity : nums1[num1Count];
		// The maximum number from nums2 that should be included in the left half.
		const num2Left = num2Count === 0 ? -Infinity : nums2[num2Count - 1];
		// The minimum number from nums2 that should be included in the right half.
		const num2Right =
			num2Count === nums2.length ? Infinity : nums2[num2Count];
		/**
		 * If the maximum number from nums1 that should be included in the left half
		 * is greater than the minimum number from nums2 that should be included in the right half,
		 * Then the merge of the left half and the right half is not sorted.
		 * We need to reduce the number of elements from nums1 that should be included in the left half.
		 * If the maximum number from nums2 that should be included in the left half
		 * is greater than the minimum number from nums1 that should be included in the right half,
		 * Then the merge of the left half and the right half is not sorted.
		 * We need to increase the number of elements from nums1 that should be included in the left half.
		 */
		if (num1Left > num2Right) {
			end = num1Count - 1;
		} else if (num2Left > num1Right) {
			start = num1Count + 1;
		} else {
			/**
			 * The merge of the left half and the right half is sorted.
			 * We can calculate the median of the merged array.
			 * If the total length is even, the median is the average of the two middle numbers.
			 * If the total length is odd, the median is the middle number.
			 * which is the minimum of the first two numbers of the right half.
			 */
			const leftMax = Math.max(num1Left, num2Left);
			const rightMin = Math.min(num1Right, num2Right);
			if (totalLength % 2 === 0) {
				return (leftMax + rightMin) / 2;
			} else {
				return rightMin;
			}
		}
	}
	return 0;
}
