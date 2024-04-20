/**
 * Medium
 * https://leetcode.com/problems/permutations/
 */
function permute(numbers: number[]): number[][] {
	/**
	 * We generate all permutations of the numbers array by
	 * creating a recursive function that tries to place a
	 * number at the current starting index, and the numbers
	 * used before are to the left of the starting index.
	 * So we start a loop from the starting index to the end
	 * and try to place each number at the starting index.
	 * Then we recursively call the function with the next
	 * starting index. After the recursive call, we swap the
	 * numbers back to their original positions to try the
	 * next number at the starting index.
	 * If the starting index is equal to the length of the
	 * numbers array, we have a valid permutation, so we add
	 * it to the permutations array.
	 */
	const permutations = [];
	function buildPermutations(start: number) {
		if (start === numbers.length) {
			permutations.push([...numbers]);
			return;
		}
		for (let i = start; i < numbers.length; i++) {
			swap(start, i, numbers);
			buildPermutations(start + 1);
			swap(start, i, numbers);
		}
		return permutations;
	}
	return buildPermutations(0);
}

function swap(i: number, j: number, numbers: number[]) {
	[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}
