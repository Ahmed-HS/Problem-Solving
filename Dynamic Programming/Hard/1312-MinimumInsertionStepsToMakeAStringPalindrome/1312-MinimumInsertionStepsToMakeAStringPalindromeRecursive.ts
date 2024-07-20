/**
 * Hard
 * https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
 */
function minInsertions(s: string): number {
	const minimumSteps = Array.from({ length: s.length }, () =>
		new Array(s.length).fill(undefined)
	);
	function minInsertions(start: number, end: number) {
		if (start >= end) return 0;
		if (minimumSteps[start][end] !== undefined) {
			return minimumSteps[start][end];
		}
		if (s[start] === s[end]) {
			minimumSteps[start][end] = minInsertions(start + 1, end - 1);
			return minimumSteps[start][end];
		}
		const insertStart = minInsertions(start, end - 1);
		const insertEnd = minInsertions(start + 1, end);
		minimumSteps[start][end] = 1 + Math.min(insertStart, insertEnd);
		return minimumSteps[start][end];
	}
	return minInsertions(0, s.length - 1);
}
