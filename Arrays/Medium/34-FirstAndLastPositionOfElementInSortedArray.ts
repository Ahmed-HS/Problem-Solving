/**
 * Medium
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */
function searchRange(numbers: number[], target: number): number[] {
	const first = findFirst(numbers, target);
	const last = findLast(numbers, target);
	return [first, last];
}

function findFirst(numbers: number[], target: number) {
	let start = 0;
	let end = numbers.length - 1;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (numbers[mid] >= target) {
			end = mid;
		} else {
			start = mid + 1;
		}
	}
	return numbers[start] === target ? start : -1;
}

function findLast(numbers: number[], target: number) {
	let start = 0;
	let end = numbers.length - 1;
	while (start < end) {
		const mid = start + Math.trunc((end - start + 1) / 2);
		if (numbers[mid] <= target) {
			start = mid;
		} else {
			end = mid - 1;
		}
	}
	return numbers[start] === target ? start : -1;
}
