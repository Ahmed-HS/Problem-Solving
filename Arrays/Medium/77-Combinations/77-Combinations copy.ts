/**
 * Medium
 * https://leetcode.com/problems/combinations/
 */
function combine(n: number, k: number): number[][] {
	const combinations: number[][] = [];
	let currentIndex = 0;
	const currentCombination: number[] = Array(k).fill(0);
	/**
	 * Create all combinations in ascending order.
	 * If the number at the current index is greater than n,
	 * we backtrack to the previous index and increment it.
	 * For example, if n = 4 and k = 3, the combinations will be:
	 * [1, 2, 3] then [1, 2, 4] then [1, 3, 4] then [2, 3, 4]
	 * beccuse when [1, 2, 4] is incremented, it becomes [1, 2, 5]
	 * which is invalid, so we backtrack to the previous index
	 * and increment it to [1, 3, 5] then move to the next index
	 * by setting it to the previous index [1, 3, 3]
	 * finally incrementing it to [1, 3, 4]
	 */
	while (currentIndex >= 0) {
		currentCombination[currentIndex]++;
		// If the current number is greater than n, backtrack to the previous index.
		if (currentCombination[currentIndex] > n) {
			currentIndex--;
		} else if (currentIndex === k - 1) {
			// Spread operator for creating a copy of the current combination
			combinations.push([...currentCombination]);
		} else {
			/**
			 * Move to the next index, and set the current number to the previous number.
			 * So that the next number can be incremented at beginning of the loop.
			 * Elements in the current combination are always in ascending order.
			 */
			currentIndex++;
			currentCombination[currentIndex] =
				currentCombination[currentIndex - 1];
		}
	}

	return combinations;
}
