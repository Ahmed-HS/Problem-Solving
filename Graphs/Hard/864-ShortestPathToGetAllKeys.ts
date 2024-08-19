/**
 * Hard
 * https://leetcode.com/problems/shortest-path-to-get-all-keys/
 */
function shortestPathAllKeys(grid: string[]): number {
	const TOTAL_KEY_COUNT = 6;
	const rowCount = grid.length;
	const columnCount = grid[0].length;
	let keysCount = 0;
	let startPosition = [0, 0];
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			const cell = grid[i][j];
			if (isLowerCaseLetter(cell)) keysCount++;
			if (cell === "@") startPosition = [i, j];
		}
	}
	const visited: boolean[][][] = Array.from({ length: rowCount }, () =>
		Array.from({ length: columnCount }, () =>
			new Array(TOTAL_KEY_COUNT).fill(false)
		)
	);
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	const toVisit = [[...startPosition, 0]];
	let steps = 0;
	while (toVisit.length) {
		steps++;
		let levelLength = toVisit.length;
		while (levelLength--) {
			const [row, column, keys] = toVisit.shift();
			for (const [rowDirection, columnDirection] of directions) {
				const newRow = row + rowDirection;
				const newColumn = column + columnDirection;
				if (
					newRow < 0 ||
					newRow >= rowCount ||
					newColumn < 0 ||
					newColumn >= columnCount ||
					grid[newRow][newColumn] === "#" ||
					visited[newRow][newColumn][keys]
				) {
					continue;
				}
				const newCell = grid[newRow][newColumn];
				if (isUpperCaseLetter(newCell)) {
					const key = newCell.toLowerCase();
					const keyIndex = key.charCodeAt(0) - "a".charCodeAt(0);
					if ((keys & (1 << keyIndex)) === 0) continue;
				}
				let newKeys = keys;
				if (isLowerCaseLetter(newCell)) {
					const key = newCell;
					const keyIndex = key.charCodeAt(0) - "a".charCodeAt(0);
					newKeys |= 1 << keyIndex;
				}
				if (newKeys === (1 << keysCount) - 1) return steps;
				visited[newRow][newColumn][keys] = true;
				toVisit.push([newRow, newColumn, newKeys]);
			}
		}
	}
	return -1;
}

function isLowerCaseLetter(letter: string) {
	return /^[a-z]$/.test(letter);
}

function isUpperCaseLetter(letter: string) {
	return /^[A-Z]$/.test(letter);
}
