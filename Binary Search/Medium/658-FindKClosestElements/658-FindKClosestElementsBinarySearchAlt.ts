/**
 * Medium
 * https://leetcode.com/problems/find-k-closest-elements/
 *
 * This function finds the k closest elements to a given target x in a sorted array.
 * The approach uses a binary search to identify the starting point of the k closest elements.
 *
 * Binary search process:
 * - Compare the difference between x and numbers[mid] with the difference between x and numbers[mid + k].
 * - Depending on which difference is smaller, adjust the window of the search (move start or end).
 *
 * Cases during binary search:
 *
 * Case 1: x is closer to numbers[mid] than to numbers[mid + k]. Move the window left:
 *         -----x-----numbers[mid]----------------numbers[mid + k]-----
 *
 * Case 2: x is still closer to numbers[mid] than to numbers[mid + k]. Move the window left again:
 *         -----numbers[mid]-----x----------------numbers[mid + k]-----
 *
 * Case 3: x is closer to numbers[mid + k] than to numbers[mid]. Move the window right:
 *         -----numbers[mid]----------------x------numbers[mid + k]-----
 *
 * Case 4: x is still closer to numbers[mid + k] than to numbers[mid]. Move the window right again:
 *         -----numbers[mid]---------------------numbers[mid + k]-----x
 *
 * The binary search ensures that the starting point of the k closest elements is identified efficiently.
 * The result is then obtained by slicing the array from the identified start position.
 *
 * @param numbers - A sorted array of numbers.
 * @param k - The number of closest elements to find.
 * @param x - The target number.
 * @returns The k closest elements to x.
 */
function findClosestElements(
	numbers: number[],
	k: number,
	x: number
): number[] {
	let start = 0;
	let end = numbers.length - 1;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (x - numbers[mid] > numbers[mid + k] - x) {
			// x is closer to numbers[mid + k], move the window right
			start = mid + 1;
		} else {
			// x is closer to numbers[mid], move the window left
			end = mid;
		}
	}
	// Slice the k closest elements starting from the final start position
	return numbers.slice(start, start + k);
}
