/**
 * Medium
 * https://leetcode.com/problems/triangle/
 */
function minimumTotal(triangle: number[][]): number {
	const rowCount = triangle.length;
	const minimumPath = Array.from({ length: rowCount - 1 }, (_, index) =>
		new Array(triangle[index].length).fill(undefined)
	);
	function findMinimumPathSum(row: number, column: number) {
		if (row === rowCount - 1) return triangle[row][column];
		if (minimumPath[row][column] !== undefined)
			return minimumPath[row][column];
		minimumPath[row][column] =
			triangle[row][column] +
			Math.min(
				findMinimumPathSum(row + 1, column),
				findMinimumPathSum(row + 1, column + 1)
			);
		return minimumPath[row][column];
	}
	return findMinimumPathSum(0, 0);
}
