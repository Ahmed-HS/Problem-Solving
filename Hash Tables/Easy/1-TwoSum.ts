/**
 * Easy
 * https://leetcode.com/problems/two-sum/
 */
function twoSum(numbers: number[], target: number): number[] {
	const seen = new Map();
	for (const [index, number] of numbers.entries()) {
		const targetIndex = seen.get(target - number);
		if (targetIndex !== undefined) {
			return [index, targetIndex];
		}
		seen.set(number, index);
	}
	return [-1, -1];
}
