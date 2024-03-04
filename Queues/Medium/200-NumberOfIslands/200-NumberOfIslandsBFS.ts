/**
 * Medium
 * https://leetcode.com/problems/number-of-islands/
 */
function numIslands(grid: string[][]): number {
	const rows = grid.length;
	const columns = grid[0].length;

	const visited = new Set<number>();
	let islandsCount = 0;

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			// Calculate a unique ID for the current cell
			const cellId = i * columns + j;

			// If the current cell is part of an island (represented by "1") and has not been visited yet
			if (grid[i][j] === "1" && !visited.has(cellId)) {
				// Perform a breadth-first search starting from the current cell to visit all its connected cells
				bfs([i, j], visited, grid);
				islandsCount++;
			}
		}
	}

	return islandsCount;
}

function bfs(startCell: number[], visited: Set<number>, grid: string[][]) {
	const queue: number[][] = [startCell];

	const columnCount = grid[0].length;

	// Continue the BFS as long as there are cells in the queue
	while (queue.length) {
		// Remove the first cell from the queue
		const cell = queue.shift()!;
		const neighbors = getNeighbors(cell, grid);

		// For each neighbor, if it has not been visited yet, mark it as visited and add it to the queue
		for (const neighbor of neighbors) {
			// Calculate a unique ID for the neighbor
			const neighborId = neighbor[0] * columnCount + neighbor[1];
			if (visited.has(neighborId)) {
				continue;
			}
			visited.add(neighborId);
			queue.push(neighbor);
		}
	}
}

function getNeighbors(cell: number[], grid: string[][]): number[][] {
	const rows = grid.length;
	const columns = grid[0].length;
	const neighbors: number[][] = [];

	// Define the possible directions to move to a neighbor
	const directions = [
		[0, -1], // left
		[0, 1], // right
		[1, 0], // down
		[-1, 0], // up
	];

	// Loop through each direction to find the neighbors
	for (const direction of directions) {
		const adjacentRow = direction[0] + cell[0];
		const adjacentColumn = direction[1] + cell[1];

		// Check if the neighbor is within the grid and is part of an island (represented by "1")
		if (
			adjacentRow > -1 &&
			adjacentRow < rows &&
			adjacentColumn > -1 &&
			adjacentColumn < columns &&
			grid[cell[0]][cell[1]] !== "0"
		) {
			// If a valid neighbor is found, add it to the neighbors array
			neighbors.push([adjacentRow, adjacentColumn]);
		}
	}

	return neighbors;
}
