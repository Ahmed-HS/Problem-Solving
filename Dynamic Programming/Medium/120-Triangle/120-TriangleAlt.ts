/**
 * Medium
 * https://leetcode.com/problems/triangle/
 */
function minimumTotal(triangle: number[][]): number {
	const rowCount = triangle.length;
	const minimumPath = new Array(rowCount);
	minimumPath[0] = triangle[0][0];
	for (let i = 1; i < rowCount; i++) {
		minimumPath[i] = triangle[i][i] + minimumPath[i - 1];
		for (let j = i - 1; j > 0; j--) {
			minimumPath[j] =
				triangle[i][j] + Math.min(minimumPath[j], minimumPath[j - 1]);
		}
		minimumPath[0] += triangle[i][0];
	}
	return Math.min(...minimumPath);
}
