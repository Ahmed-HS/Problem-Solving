/**
 * Medium
 * https://leetcode.com/problems/maximal-square/
 */
function maximalSquare(matrix: string[][]): number {
	const rowCount = matrix.length;
	const columnCount = matrix[0].length;
	const maxSideLength = Array.from({ length: rowCount + 1 }, () =>
		new Array(columnCount + 1).fill(0)
	);
	let maxSquareSideLength = 0;
	for (let i = 1; i <= rowCount; i++) {
		for (let j = 1; j <= columnCount; j++) {
			if (matrix[i - 1][j - 1] === "1") {
				maxSideLength[i][j] =
					1 +
					Math.min(
						maxSideLength[i][j - 1],
						maxSideLength[i - 1][j],
						maxSideLength[i - 1][j - 1]
					);
				maxSquareSideLength = Math.max(
					maxSquareSideLength,
					maxSideLength[i][j]
				);
			}
		}
	}
	return maxSquareSideLength ** 2;
}
