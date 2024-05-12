/**
 * Medium
 * https://leetcode.com/problems/find-k-closest-elements/
 */
function findClosestElements(
	numbers: number[],
	k: number,
	x: number
): number[] {
	const closest = firstOccurrence(numbers, x);
	let left = closest - 1;
	let right = closest;
	while (k > 0) {
		const leftDelta = left >= 0 ? Math.abs(numbers[left] - x) : Infinity;
		const rightDelta =
			right < numbers.length ? Math.abs(numbers[right] - x) : Infinity;
		if (leftDelta <= rightDelta) {
			left--;
		} else {
			right++;
		}
		k--;
	}
	return numbers.slice(left + 1, right);
}

function firstOccurrence(numbers: number[], target: number): number {
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
	return start;
}
