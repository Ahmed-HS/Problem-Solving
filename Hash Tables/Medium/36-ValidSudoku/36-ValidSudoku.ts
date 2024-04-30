/**
 * Medium
 * https://leetcode.com/problems/valid-sudoku/
 */
function isValidSudoku(board: string[][]): boolean {
	return (
		validateRows(board) && validateColumns(board) && validateBlocks(board)
	);
}

function validateRows(board: string[][]) {
	const rows = board.length;
	const columns = board[0].length;
	for (let i = 0; i < rows; i++) {
		const seen = new Set();
		for (let j = 0; j < columns; j++) {
			if (board[i][j] === ".") continue;
			if (seen.has(board[i][j])) return false;
			seen.add(board[i][j]);
		}
	}
	return true;
}

function validateColumns(board: string[][]) {
	const rows = board.length;
	const columns = board[0].length;
	for (let i = 0; i < columns; i++) {
		const seen = new Set();
		for (let j = 0; j < rows; j++) {
			if (board[j][i] === ".") continue;
			if (seen.has(board[j][i])) return false;
			seen.add(board[j][i]);
		}
	}
	return true;
}

function validateBlocks(board: string[][]) {
	for (let i = 0; i < 9; i++) {
		const seen = new Set();
		const rowStart = Math.trunc(i / 3) * 3;
		const columnStart = (i % 3) * 3;
		for (let j = rowStart; j < rowStart + 3; j++) {
			for (let k = columnStart; k < columnStart + 3; k++) {
				if (board[j][k] === ".") continue;
				if (seen.has(board[j][k])) return false;
				seen.add(board[j][k]);
			}
		}
	}
	return true;
}
