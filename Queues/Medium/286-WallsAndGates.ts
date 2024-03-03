/**
 * Medium
 * https://leetcode.com/problems/walls-and-gates/
 */
function wallsAndGates(rooms: number[][]) {
	// Get the number of rows and columns in the rooms array
	const rows = rooms.length;
	const columns = rooms[0].length;

	// Initialize an array to store the positions of the gates
	const gates: number[][] = [];

	// Loop through the rooms array to find the gates (represented by 0)
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			if (rooms[i][j] === 0) {
				// If a gate is found, store its position
				gates.push([i, j]);
			}
		}
	}

	// Perform a breadth-first search (BFS) starting from the gates
	bfs(gates, rooms);
}

function bfs(gates: number[][], rooms: number[][]) {
	// Initialize a queue with the positions of the gates
	const queue: number[][] = [...gates];
	let currentLevel = 0;

	/**
	 * Perform a breadth-first search (BFS) starting from the gates.
	 * The search expands from the gates one level at a time.
	 * At each level, the search processes all positions at that level.
	 * If a room with a distance from the nearest gate of '2147483647' is found,
	 * it means that the room was not visited yet. In this case, we update the distance
	 * from the nearest gate and add the room to the queue to process its neighbors.
	 */
	while (queue.length) {
		currentLevel++;
		const levelSize = queue.length;

		// Process all positions at the current level
		for (let i = 0; i < levelSize; i++) {
			const cell = queue.shift()!;

			// Get the neighbors of the current position
			const neighbors = getNeighbors(cell[0], cell[1], rooms);

			// For each neighbor, update its distance from the nearest gate and add it to the queue
			for (const neighbor of neighbors) {
				rooms[neighbor[0]][neighbor[1]] = currentLevel;
				queue.push(neighbor);
			}
		}
	}
}

// The function to get the neighbors of a given position
function getNeighbors(
	row: number,
	column: number,
	rooms: number[][]
): number[][] {
	const rows = rooms.length;
	const columns = rooms[0].length;

	// Initialize an array to store the neighbors
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
		const adjacentRow = direction[0] + row;
		const adjacentColumn = direction[1] + column;

		// Check if the neighbor is within the rooms array and is an unvisited room
		if (
			adjacentRow > -1 &&
			adjacentRow < rows &&
			adjacentColumn > -1 &&
			adjacentColumn < columns &&
			rooms[adjacentRow][adjacentColumn] === 2147483647
		) {
			// If a valid neighbor is found, add it to the neighbors array
			neighbors.push([adjacentRow, adjacentColumn]);
		}
	}
	return neighbors;
}
