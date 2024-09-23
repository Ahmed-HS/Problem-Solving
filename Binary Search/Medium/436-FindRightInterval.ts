/**
 * Medium
 * https://leetcode.com/problems/find-right-interval/
 */
function findRightInterval(intervals: number[][]): number[] {
	const rightIndex = new Array(intervals.length);
	const startIndex = new Array<number[]>();
	for (let i = 0; i < intervals.length; i++) {
		startIndex.push([intervals[i][0], i]);
	}
	startIndex.sort((first, second) => first[0] - second[0]);
	for (let i = 0; i < intervals.length; i++) {
		const end = intervals[i][1];
		let left = 0;
		let right = startIndex.length;
		while (left < right) {
			const mid = left + Math.trunc((right - left) / 2);
			const start = startIndex[mid][0];
			if (start >= end) {
				right = mid;
			} else {
				left = mid + 1;
			}
		}
		rightIndex[i] = left === intervals.length ? -1 : startIndex[left][1];
	}
	return rightIndex;
}
