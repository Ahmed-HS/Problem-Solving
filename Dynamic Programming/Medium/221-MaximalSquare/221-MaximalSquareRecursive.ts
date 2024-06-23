/**
 * Medium
 * https://leetcode.com/problems/maximal-square/
 */
function maximalSquare(matrix: string[][]): number {
	const rowCount = matrix.length;
	const columnCount = matrix[0].length;
	const maxSideLength = Array.from({ length: rowCount }, () =>
		new Array(columnCount).fill(undefined)
	);
	function expandSquare(row: number, column: number) {
		if (
			row >= rowCount ||
			column >= columnCount ||
			matrix[row][column] === "0"
		) {
			return 0;
		}
		if (maxSideLength[row][column] !== undefined)
			return maxSideLength[row][column];
		maxSideLength[row][column] =
			1 +
			Math.min(
				expandSquare(row, column + 1),
				expandSquare(row + 1, column),
				expandSquare(row + 1, column + 1)
			);
		return maxSideLength[row][column];
	}
	let maxSquareSideLength = 0;
	for (let i = 0; i < rowCount; i++) {
		for (let j = 0; j < columnCount; j++) {
			if (matrix[i][j] === "1") {
				const sidelength = expandSquare(i, j);
				maxSquareSideLength = Math.max(maxSquareSideLength, sidelength);
			}
		}
	}
	return maxSquareSideLength ** 2;
}
