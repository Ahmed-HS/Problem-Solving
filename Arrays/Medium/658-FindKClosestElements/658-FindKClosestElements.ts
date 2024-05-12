/**
 * Medium
 * https://leetcode.com/problems/find-k-closest-elements/
 */
function findClosestElements(
	numbers: number[],
	k: number,
	x: number
): number[] {
	let left = 0;
	let right = numbers.length - 1;
	while (right - left + 1 > k) {
		const leftDelta = Math.abs(numbers[left] - x);
		const rightDelta = Math.abs(numbers[right] - x);
		if (leftDelta > rightDelta) {
			left++;
		} else {
			right--;
		}
	}
	return numbers.slice(left, right + 1);
}
