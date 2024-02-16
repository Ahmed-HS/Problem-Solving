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
	const alldiagonals: number[] = [];
	let count = rowCount * columnCount;
	let row = 0;
	let column = 0;
	/**
	 * This will be used to control the direction of traversal.
	 * 1 for up-right, -1 for down-left.
	 */
	let direction = 1;
	// Loop until all elements in the matrix are traversed
	while (count) {
		// Add the current element to the diagonal array
		alldiagonals.push(mat[row][column]);
		// Move diagonally in the current direction.
		row -= direction;
		column += direction;
		// Check if the current diagonal is out of bounds
		const rowEnded = isOutOfBound(row, rowCount);
		const columnEnded = isOutOfBound(column, columnCount);
		/**
		 * If the current diagonal is out of bounds,
		 * We need to find the starting point of the next diagonal.
		 */
		if (rowEnded || columnEnded) {
			// If we are moving up-right.
			if (direction === 1) {
				// Move 2 steps down if we passed the last column.
				row += columnEnded ? 2 : 1;
				// Move 1 step left if we passed the last column.
				column -= columnEnded ? 1 : 0;
			} else {
				// Move 1 step up if we passed the last row.
				row -= rowEnded ? 1 : 0;
				// Move 2 steps right if we passed the last row.
				column += rowEnded ? 2 : 1;
			}
			// Change the direction of traversal.
			direction = -direction;
		}
		count--;
	}
	return alldiagonals;
}

function isOutOfBound(index: number, length: number) {
	return index < 0 || index >= length;
}
