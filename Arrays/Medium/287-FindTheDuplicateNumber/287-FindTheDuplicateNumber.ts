/**
 * Medium
 * https://leetcode.com/problems/find-the-duplicate-number/
 */
function findDuplicate(numbers: number[]): number {
	/**
	 * The idea is to swap the numbers to their correct index.
	 * If the number is already at its correct index, move to the next number.
	 * If the number at the correct index is the same as the current number,
	 * then it is the duplicate number.
	 * Otherwise, swap the number at the correct index with the current number.
	 */
	let i = 0;
	while (i < numbers.length) {
		const number = numbers[i];
		if (number === i + 1) {
			i++;
		} else if (numbers[number - 1] == number) {
			return number;
		} else {
			numbers[i] = numbers[number - 1];
			numbers[number - 1] = number;
		}
	}
	return -1;
}
