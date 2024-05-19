/**
 * Medium
 * https://leetcode.com/problems/sort-colors/
 */
function sortColors(numbers: number[]): void {
	/**
	 * Every time we encounter a 0, we swap it with the first non-zero element
	 * Every time we encounter a 2, we swap it with the last non-two element
	 * We decrement i when we swap a 2 because we need to check the new element
	 */
	let zeroIndex = 0;
	let twoIndex = numbers.length - 1;
	for (let i = 0; i <= twoIndex; i++) {
		if (numbers[i] === 0) {
			swap(i, zeroIndex, numbers);
			zeroIndex++;
		} else if (numbers[i] === 2) {
			swap(i, twoIndex, numbers);
			i--;
			twoIndex--;
		}
	}
}

function swap(first: number, second: number, numbers: number[]) {
	[numbers[first], numbers[second]] = [numbers[second], numbers[first]];
}
