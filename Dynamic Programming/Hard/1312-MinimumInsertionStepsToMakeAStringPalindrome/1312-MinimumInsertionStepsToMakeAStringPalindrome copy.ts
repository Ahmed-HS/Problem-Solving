/**
 * Hard
 * https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
 */
function minInsertions(s: string): number {
	const minimumSteps = new Array(s.length).fill(0);
	for (let start = s.length - 2; start >= 0; start--) {
		// This stores the value at minimumSteps[start + 1][end - 1]
		let previousInsertionCount = 0;
		for (let end = start + 1; end < s.length; end++) {
			// Get the value of minimumSteps[start + 1][end]
			const currentInsertionCount = minimumSteps[end];
			if (s[start] === s[end]) {
				// previousInsertionCount = minimumSteps[start + 1][end - 1]
				minimumSteps[end] = previousInsertionCount;
			} else {
				/**
				 * minimumSteps[end] = minimumSteps[start + 1][end]
				 * minimumSteps[end - 1] = minimumSteps[start][end - 1]
				 */
				minimumSteps[end] =
					1 + Math.min(minimumSteps[end], minimumSteps[end - 1]);
			}
			/**
			 * Store the value of minimumSteps[start + 1][end] to use it as
			 * minimumSteps[start + 1][end - 1] in the next iteration
			 */
			previousInsertionCount = currentInsertionCount;
		}
	}
	return minimumSteps[s.length - 1];
}
