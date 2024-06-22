/**
 * Medium
 * https://leetcode.com/problems/minimum-falling-path-sum/
 */
function minFallingPathSum(matrix: number[][]): number {
	const rowCount = matrix.length;
	const columnCount = matrix[0].length;
	const minimumPath = [...matrix[0]];
	for (let i = 1; i < rowCount; i++) {
		let downLeftPath = Infinity;
		for (let j = 0; j < columnCount; j++) {
			const previousDownLeft = minimumPath[j];
			minimumPath[j] =
				matrix[i][j] +
				Math.min(
					downLeftPath,
					minimumPath[j],
					minimumPath[j + 1] ?? Infinity
				);
			downLeftPath = previousDownLeft;
		}
	}
	return Math.min(...minimumPath);
}
