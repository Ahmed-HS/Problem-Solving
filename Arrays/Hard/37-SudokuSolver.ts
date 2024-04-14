/**
 * Hard
 * https://leetcode.com/problems/sudoku-solver/
 */
function solveSudoku(board: string[][]): void {
	/**
	 * Loop tthrough the empty cells and try to place a number from 1 to 9.
	 * If the number can be placed, we recursively call the function with the next cell.
	 * If the number cannot be placed, we try the next number.
	 * After we place the number, If the solve function returns true,
	 * it means we were able to fill all the remaining empty cells,
	 * so we return true to end the search.
	 * If the solve function returns false, we backtrack
	 * by removing the number from the cell.
	 * If we reach the last cell, then we were able to fill all
	 * the empty cells, and we return true.
	 */
	const size = board.length;
	function solve(row: number, column: number) {
		for (let i = row; i < size; i++) {
			for (let j = column; j < size; j++) {
				if (board[i][j] !== ".") continue;
				for (let k = 1; k <= 9; k++) {
					if (canPlaceNumber(i, j, k, board)) {
						board[i][j] = k.toString();
						if (solve(i, j)) return true;
						board[i][j] = ".";
					}
				}
				return false;
			}
			// Reset the column to 0 after the first row to start from the beginning.
			column = 0;
		}
		return true;
	}
	solve(0, 0);
}

function canPlaceNumber(
	row: number,
	column: number,
	number: number,
	board: string[][]
) {
	const size = board.length;
	const numberString = number.toString();
	for (let i = 0; i < size; i++) {
		if (board[i][column] === numberString) return false;
		if (board[row][i] === numberString) return false;
	}
	const rowStart = Math.trunc(row / 3) * 3;
	const columnStart = Math.trunc(column / 3) * 3;
	for (let i = rowStart; i < rowStart + 3; i++) {
		for (let j = columnStart; j < columnStart + 3; j++) {
			if (board[i][j] === numberString) return false;
		}
	}
	return true;
}
