/**
 * Medium
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 */
function minSubArrayLen(target: number, nums: number[]): number {
	/**
	 * First, we create a prefix sum array to store the sum
	 * of every number until the current index.
	 * prefixSum[1] = nums[0]
	 * prefixSum[2] = nums[0] + nums[1]
	 */
	const prefixSum: number[] = [0];
	let minimumLength = Number.POSITIVE_INFINITY;
	for (let i = 1; i <= nums.length; i++) {
		prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
	}
	/**
	 * We then iterate through the prefix sum array.
	 * For each element, we find the end index of the subarray
	 * such that prefixSum[end] - prefixSum[i] >= target.
	 * So we search for the first index greater than or equal to
	 * prefixSum[i] + target using binary search.
	 * prefixSum[end] - prefixSum[i] does not include nums[i],
	 * so end - i is the length of the subarray.
	 */
	for (let i = 0; i < prefixSum.length; i++) {
		const end = binarySearch(i + 1, prefixSum[i] + target, prefixSum);
		if (end === -1) {
			break;
		}
		minimumLength = Math.min(minimumLength, end - i);
	}
	return minimumLength === Number.POSITIVE_INFINITY ? 0 : minimumLength;
}

function binarySearch(start: number, target: number, nums: number[]): number {
	let end = nums.length - 1;
	while (start < end) {
		const mid = Math.floor((start + end) / 2);
		if (nums[mid] >= target) {
			end = mid;
		} else {
			start = mid + 1;
		}
	}
	return nums[end] >= target ? end : -1;
}
