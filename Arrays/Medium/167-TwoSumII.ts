/**
 * Medium
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */
function twoSum(numbers: number[], target: number): number[] {
	let start = 0;
	let end = numbers.length - 1;
	while (start < end) {
		const sum = numbers[start] + numbers[end];
		if (sum === target) {
			break;
		} else if (sum < target) {
			start++;
		} else {
			end--;
		}
	}
	return [start + 1, end + 1];
}
