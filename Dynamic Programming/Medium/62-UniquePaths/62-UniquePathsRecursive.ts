/**
 * Medium
 * https://leetcode.com/problems/unique-paths/
 */
function uniquePaths(rows: number, columns: number): number {
	const waysCount = Array.from({ length: rows }, () =>
		new Array(columns).fill(undefined)
	);
	function findPathsCount(m: number, n: number) {
		if (m === 0 || n === 0) return 1;
		if (m < 0 || n < 0) return 0;
		if (waysCount[m][n]) return waysCount[m][n];
		waysCount[m][n] = findPathsCount(m - 1, n) + findPathsCount(m, n - 1);
		return waysCount[m][n];
	}
	return findPathsCount(rows - 1, columns - 1);
}
