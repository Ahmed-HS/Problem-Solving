/**
 * Medium
 * https://leetcode.com/problems/sort-colors/
 */
function sortColors(numbers: number[]): void {
	const frequency = new Array(3).fill(0);
	for (let i = 0; i < numbers.length; i++) {
		frequency[numbers[i]]++;
	}
	let write = 0;
	for (let i = 0; i < frequency.length; i++) {
		for (let j = 0; j < frequency[i]; j++) {
			numbers[write] = i;
			write++;
		}
	}
}
