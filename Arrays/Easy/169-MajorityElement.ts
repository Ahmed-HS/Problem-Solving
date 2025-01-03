/**
 * Easy
 * https://leetcode.com/problems/majority-element/
 */
function majorityElement(numbers: number[]): number {
	let majorityElement = Infinity;
	let majorityCount = 0;
	for (const number of numbers) {
		if (majorityCount === 0) {
			majorityElement = number;
		}
		majorityCount += number === majorityElement ? 1 : -1;
	}
	return majorityElement;
}
