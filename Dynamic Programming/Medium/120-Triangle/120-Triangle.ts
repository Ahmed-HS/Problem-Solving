/**
 * Medium
 * https://leetcode.com/problems/triangle/
 */
function minimumTotal(triangle: number[][]): number {
	const rowCount = triangle.length;
	const minimumPath = new Array(rowCount + 1).fill(0);
	for (let i = rowCount - 1; i >= 0; i--) {
		for (let j = 0; j < i + 1; j++) {
			minimumPath[j] =
				triangle[i][j] + Math.min(minimumPath[j], minimumPath[j + 1]);
		}
	}
	return minimumPath[0];
}
