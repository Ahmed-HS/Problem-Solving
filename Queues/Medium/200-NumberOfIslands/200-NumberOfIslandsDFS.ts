/**
 * Medium
 * https://leetcode.com/problems/number-of-islands/
 */
function numIslands(grid: string[][]): number {
	const rows = grid.length;
	const columns = grid[0].length;

	let islandsCount = 0;

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			// If the current cell is part of an island (represented by "1")
			if (grid[i][j] === "1") {
				// Remove the island from the grid by setting all its connected cells to "0"
				removeIsland([i, j], grid);
				islandsCount++;
			}
		}
	}

	return islandsCount;
}

function removeIsland(cell: number[], grid: string[][]) {
	const rows = grid.length;
	const columns = grid[0].length;

	// If the current cell is out of bounds or is not part of an island, return
	if (
		cell[0] < 0 ||
		cell[0] >= rows ||
		cell[1] < 0 ||
		cell[1] >= columns ||
		grid[cell[0]][cell[1]] === "0"
	) {
		return;
	}

	// Mark the current cell as visited by setting it to "0"
	grid[cell[0]][cell[1]] = "0";

	// Recursively remove the rest of the island by visiting the neighboring cells
	removeIsland([cell[0], cell[1] + 1], grid); // right
	removeIsland([cell[0], cell[1] - 1], grid); // left
	removeIsland([cell[0] + 1, cell[1]], grid); // down
	removeIsland([cell[0] - 1, cell[1]], grid); // up
}
