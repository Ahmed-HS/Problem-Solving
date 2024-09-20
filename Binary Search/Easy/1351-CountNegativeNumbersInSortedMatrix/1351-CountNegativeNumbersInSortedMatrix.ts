/**
 * Easy
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 */
function countNegatives(grid: number[][]): number {
	let count = 0;
	for (const row of grid) {
		count += row.length - firstNegative(row);
	}
	return count;
}

function firstNegative(numbers: number[]): number {
	let start = 0;
	let end = numbers.length;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (numbers[mid] >= 0) {
			start = mid + 1;
		} else {
			end = mid;
		}
	}
	return start;
}
