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
		const nums1LeftCount = start + Math.trunc((end - start) / 2);
		const nums2LeftCount = halfLength - nums1LeftCount;
		// The last number from nums1 that should be included in the left half.
		const num1Left =
			nums1LeftCount === 0 ? -Infinity : nums1[nums1LeftCount - 1];
		// The first number from nums1 that should be included in the right half.
		const num1Right =
			nums1LeftCount === nums1.length ? Infinity : nums1[nums1LeftCount];
		// The last number from nums2 that should be included in the left half.
		const num2Left =
			nums2LeftCount === 0 ? -Infinity : nums2[nums2LeftCount - 1];
		// The first number from nums2 that should be included in the right half.
		const num2Right =
			nums2LeftCount === nums2.length ? Infinity : nums2[nums2LeftCount];
		/**
		 * If the last number from nums1 that should be included in the left half
		 * is greater than the first number from nums2 that should be included in the right half,
		 * Then the merge of the left half and the right half is not sorted.
		 * We need to reduce the number of elements from nums1 that should be included in the left half.
		 * If the last number from nums2 that should be included in the left half
		 * is greater than the first number from nums1 that should be included in the right half,
		 * Then the merge of the left half and the right half is not sorted.
		 * We need to increase the number of elements from nums1 that should be included in the left half.
		 */
		if (num1Left > num2Right) {
			end = nums1LeftCount - 1;
		} else if (num2Left > num1Right) {
			start = nums1LeftCount + 1;
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
