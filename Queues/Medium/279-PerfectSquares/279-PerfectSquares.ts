/**
 * Medium
 * https://leetcode.com/problems/perfect-squares/
 */
function numSquares(n: number): number {
	// Create an array with n to store the remaining numbers to process.
	const remaining = [n];
	const seen = new Set<number>();
	/**
	 * Counter for the level
	 * (which represents the number of perfect square numbers used to sum to n).
	 */
	let level = 0;

	// Continue as long as there are remaining numbers to process.
	while (remaining.length) {
		level++;
		// Get the number of remaining numbers at the current level.
		const levelLength = remaining.length;
		// For each remaining number at the current level.
		for (let i = 0; i < levelLength; i++) {
			const current = remaining.shift();
			// For each perfect square number up to the current number.
			for (let j = 1; j * j <= current; j++) {
				/**
				 * Calculate the remaining number by subtracting
				 * the perfect square number from the current number.
				 */
				const remainingNumber = current - j * j;
				/**
				 * If the new number is 0, return the level (since we've found a sum of perfect square numbers that equals n).
				 */
				if (remainingNumber === 0) {
					return level;
				}
				if (!seen.has(remainingNumber)) {
					seen.add(remainingNumber);
					remaining.push(remainingNumber);
				}
			}
		}
	}
	return level;
}
