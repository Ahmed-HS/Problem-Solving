/**
 * Hard
 * https://leetcode.com/problems/n-queens-ii/
 */
function totalNQueens(n: number): number {
	/**
	 * The n-queens puzzle is the problem of placing n queens
	 * on an n x n chessboard such that no two queens attack each other.
	 * Given an integer n, return the number of distinct solutions to the n-queens puzzle.
	 * We can create a recursive function that loops through each row and tries to
	 * place a queen in each column in that row. If the queen can be placed, we recursively call
	 * the function with the next row to place the remaining queens.
	 * If the queen cannot be placed, we try the next column.
	 * After the recursive call to place the remaining queens,
	 * we backtrack by removing the placed queen from the board and trying the next column.
	 * If we reach the last row, we increment the number of ways to place the queens.
	 */
	const board: boolean[][] = Array.from({ length: n }, () =>
		Array(n).fill(false)
	);

	function placeQueens(row: number): number {
		if (row === n) return 1;
		let numberOfWays = 0;
		for (let j = 0; j < n; j++) {
			if (isSafe(row, j, board)) {
				board[row][j] = true;
				numberOfWays += placeQueens(row + 1);
				board[row][j] = false;
			}
		}
		return numberOfWays;
	}

	return placeQueens(0);
}

function isSafe(row: number, column: number, board: boolean[][]) {
	const n = board.length;
	for (let i = 0; i <= row; i++) {
		// Checking if the column is safe
		if (board[i][column]) return false;
		/**
		 * Checking if all diagonals are safe
		 * row - 1 , column - 1 (top left)
		 * row - 1 , column + 1 (top right)
		 */
		if (column - i >= 0 && board[row - i][column - i]) return false;
		if (column + i < n && board[row - i][column + i]) return false;
	}

	return true;
}
