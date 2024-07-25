/**
 * Medium
 * https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/
 */
function nearestExit(maze: string[][], entrance: number[]): number {
	const rowCount = maze.length;
	const columnCount = maze[0].length;
	const [entranceRow, entranceColumn] = entrance;
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	maze[entranceRow][entranceColumn] = "+";
	const toVisit = [[entranceRow, entranceColumn]];
	let steps = 0;
	while (toVisit.length) {
		steps++;
		let length = toVisit.length;
		while (length--) {
			const [row, column] = toVisit.shift();
			for (const [rowDirection, columnDirection] of directions) {
				const newRow = row + rowDirection;
				const newColumn = column + columnDirection;
				if (
					newRow < 0 ||
					newRow >= rowCount ||
					newColumn < 0 ||
					newColumn >= columnCount ||
					maze[newRow][newColumn] === "+"
				) {
					continue;
				}
				if (
					newRow === 0 ||
					newRow === rowCount - 1 ||
					newColumn === 0 ||
					newColumn === columnCount - 1
				) {
					return steps;
				}
				maze[newRow][newColumn] = "+";
				toVisit.push([newRow, newColumn]);
			}
		}
	}
	return -1;
}
