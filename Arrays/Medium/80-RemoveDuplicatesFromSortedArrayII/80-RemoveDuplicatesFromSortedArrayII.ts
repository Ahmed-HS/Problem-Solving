/**
 * Medium
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 */
function removeDuplicates(numbers: number[]): number {
	if (numbers.length <= 2) return numbers.length;
	const allowedDuplicates = 2;
	let uniqueIndex = allowedDuplicates;
	for (let i = uniqueIndex; i < numbers.length; i++) {
		if (numbers[i] !== numbers[uniqueIndex - allowedDuplicates]) {
			numbers[uniqueIndex] = numbers[i];
			uniqueIndex++;
		}
	}
	return uniqueIndex;
}
