/**
 * Medium
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 */
function peakIndexInMountainArray(arr: number[]): number {
	let start = 0;
	let end = arr.length - 1;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (arr[mid + 1] >= arr[mid]) {
			start = mid + 1;
		} else {
			end = mid;
		}
	}
	return start;
}
