/**
 * Medium
 * https://leetcode.com/problems/spiral-matrix/
 * This function returns an array of numbers
 * obtained by traversing the input 2D array
 * in a spiral pattern.
 */
function spiralOrder(matrix: number[][]): number[] {
	const rowCount = matrix.length;
	const columnCount = matrix[0].length;
	const spiral: number[] = [];
	/**
	 * To traverse the matrix in a spiral pattern,
	 * we need to move right, down, left, and up.
	 * We will use 2 arrays to control the movements
	 * of the rows and columns, when moving in each direction.
	 * For example, when moving right, we will increment the column index,
	 * but the row index will remain the same.
	 */
	const rowMovments = [0, 1, 0, -1];
	const columnMovments = [1, 0, -1, 0];
	/**
	 * We keep track of the length of the remaining columns and rows
	 * we need to traverse.
	 * When we finish a column and row, the matrix will be reduced
	 * by 1 column and 1 row (n - 1, m - 1).
	 */
	const length = [columnCount, rowCount - 1];
	let row = 0;
	let column = -1;
	/**
	 * The direction helps us change the direction of traversal
	 * from right to down, down to left, left to up, and up to right.
	 * We keep looping through the matrix until there is no remaining
	 * column or row to traverse.
	 * length[direction % 2] gets the length of the current row or column.
	 * index 0 is for the column, and index 1 is for the row.
	 */
	let direction = 0;
	while (length[direction % 2]) {
		/**
		 * Loop through the number of elements
		 * in the current row or column.
		 */
		for (let i = 0; i < length[direction % 2]; i++) {
			row += rowMovments[direction];
			column += columnMovments[direction];
			spiral.push(matrix[row][column]);
		}
		length[direction % 2]--;
		direction = (direction + 1) % 4;
	}
	return spiral;
}
