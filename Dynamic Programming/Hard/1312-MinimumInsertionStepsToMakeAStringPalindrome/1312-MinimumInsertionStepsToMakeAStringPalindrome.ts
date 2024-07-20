/**
 * Hard
 * https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
 */
function minInsertions(s: string): number {
	const minimumSteps = Array.from({ length: s.length }, () =>
		new Array(s.length).fill(0)
	);
	for (let start = s.length - 2; start >= 0; start--) {
		for (let end = start + 1; end < s.length; end++) {
			if (s[start] === s[end]) {
				minimumSteps[start][end] =
					minimumSteps[start + 1][end - 1] ?? 0;
			} else {
				minimumSteps[start][end] =
					1 +
					Math.min(
						minimumSteps[start + 1][end],
						minimumSteps[start][end - 1]
					);
			}
		}
	}
	return minimumSteps[0][s.length - 1];
}
