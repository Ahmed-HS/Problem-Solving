/**
 * Easy
 * https://leetcode.com/problems/minimum-absolute-difference/
 */
function minimumAbsDifference(numbers: number[]): number[][] {
	numbers.sort((a, b) => a - b);
	let minDifference = Infinity;
	for (let i = 1; i < numbers.length; i++) {
		minDifference = Math.min(minDifference, numbers[i] - numbers[i - 1]);
	}
	const result: number[][] = [];
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] - numbers[i - 1] === minDifference) {
			result.push([numbers[i - 1], numbers[i]]);
		}
	}
	return result;
}
