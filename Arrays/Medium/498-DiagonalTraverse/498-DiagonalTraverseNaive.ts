/**
 * Medium
 * https://leetcode.com/problems/diagonal-traverse/
 * This function returns an array of numbers
 * obtained by traversing the input 2D array
 * in a zigzag diagonal pattern.
 */
function findDiagonalOrder(mat: number[][]): number[] {
	const rowCount = mat.length;
	const columnCount = mat[0].length;
	// Calculate the total number of diagonals in the matrix
	const diagonalsCount = rowCount + columnCount - 1;
	const allDiagonals: number[] = [];
	// Loop through each diagonal
	for (let i = 0; i < diagonalsCount; i++) {
		/**
		 * The starting point of the diagonals are
		 * the elements at the first column and the last row.
		 * If we are going down the first column,
		 * we start at (0, i).
		 * If we are going across the last row,
		 * we start at (i - rowCount + 1, rowCount - 1).
		 */
		const firstColumnEneded = i < rowCount;
		let column = firstColumnEneded ? 0 : i - rowCount + 1;
		let row = firstColumnEneded ? i : rowCount - 1;

		/**
		 * We move up-right from the diagonal's starting point.
		 * If the diagonal index is odd, we need to traverse it in reverse,
		 * so we use unshift to add elements to the start of the diagonal array.
		 */
		const diagonal: number[] = [];
		const insert = i % 2 === 0 ? diagonal.push : diagonal.unshift;
		while (row > -1 && column < columnCount) {
			insert.call(diagonal, mat[row][column]);
			row--;
			column++;
		}
		allDiagonals.push(...diagonal);
	}
	return allDiagonals;
}
