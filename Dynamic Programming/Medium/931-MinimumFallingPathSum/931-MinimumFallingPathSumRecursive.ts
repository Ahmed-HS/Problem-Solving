/**
 * Medium
 * https://leetcode.com/problems/minimum-falling-path-sum/
 */
function minFallingPathSum(matrix: number[][]): number {
	const rowCount = matrix.length;
	const columnCount = matrix[0].length;
	const minimumPath = Array.from({ length: rowCount - 1 }, () =>
		new Array(columnCount).fill(undefined)
	);
	function findMinimumPathSum(row: number, column: number) {
		if (column < 0 || column >= columnCount) return Infinity;
		if (row === rowCount - 1) return matrix[row][column];
		if (minimumPath[row][column] !== undefined)
			return minimumPath[row][column];
		const left = findMinimumPathSum(row + 1, column - 1);
		const middle = findMinimumPathSum(row + 1, column);
		const right = findMinimumPathSum(row + 1, column + 1);
		minimumPath[row][column] =
			matrix[row][column] + Math.min(left, middle, right);
		return minimumPath[row][column];
	}
	return Math.min(
		...matrix[0].map((_, index) => findMinimumPathSum(0, index))
	);
}
