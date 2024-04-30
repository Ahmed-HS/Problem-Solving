/**
 * Medium
 * https://leetcode.com/problems/valid-sudoku/
 */
function isValidSudoku(board: string[][]): boolean {
	const rows = board.length;
	const columns = board[0].length;
	const seen = new Set<string>();
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			const number = board[i][j];
			if (number === ".") continue;
			const rowKey = `Row:${i},Number:${number}`;
			const columnKey = `Column:${j},Number:${number}`;
			const blockNumber = Math.trunc(i / 3) * 3 + Math.trunc(j / 3);
			const blockKey = `Block:${blockNumber},Number:${number}`;
			if (seen.has(rowKey) || seen.has(columnKey) || seen.has(blockKey)) {
				return false;
			}
			seen.add(rowKey);
			seen.add(columnKey);
			seen.add(blockKey);
		}
	}
	return true;
}
