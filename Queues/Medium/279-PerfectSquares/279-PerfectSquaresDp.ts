/**
 * Medium
 * https://leetcode.com/problems/perfect-squares/
 */
function numSquares(n: number): number {
	/**
	 * Initialize an array of size n + 1 to store the least
	 * number of perfect square numbers that add up to each index.
	 */
	const steps = new Array(n + 1);

	// The least number of perfect square numbers that sum to 0 is 0.
	steps[0] = 0;

	// Loop through each number up to n.
	for (let i = 1; i <= n; i++) {
		/**
		 * The max number of perfect square numbers for
		 * i is i (since i can always be represented as the sum of i 1's).
		 */
		steps[i] = i;

		// Loop through each perfect square number up to i.
		for (let j = 1; j * j <= i; j++) {
			/**
			 * Update the least number of perfect square numbers for i as
			 * the minimum of the current value and the value for i - j*j,
			 * which represents the number remaining after subtracting the perfect square number,
			 * plus 1 (since we've used a perfect square number j*j to get to i - j*j).
			 */
			steps[i] = Math.min(steps[i], steps[i - j * j] + 1);
		}
	}

	// Return the least number of perfect square numbers for n.
	return steps[n];
}
