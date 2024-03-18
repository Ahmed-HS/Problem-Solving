/**
 * Medium
 * https://leetcode.com/problems/01-matrix/
 */
function updateMatrix(mat: number[][]): number[][] {
	const toVisit = [];
	const rows = mat.length;
	const columns = mat[0].length;
	const distances = Array.from({ length: rows }, () =>
		new Array(columns).fill(-1)
	);
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			if (mat[i][j] === 0) {
				toVisit.push([i, j]);
				distances[i][j] = 0;
			}
		}
	}
	while (toVisit.length) {
		const parent = toVisit.shift();
		const neighbors = getNeighbors(parent, distances, mat);
		for (const neighbor of neighbors) {
			if (distances[neighbor[0]][neighbor[1]] === -1) {
				toVisit.push([neighbor[0], neighbor[1]]);
				distances[neighbor[0]][neighbor[1]] =
					distances[parent[0]][parent[1]] + 1;
			}
		}
	}
	return distances;
}
function getNeighbors(
	position: number[],
	distances: number[][],
	mat: number[][]
): number[][] {
	const rowCount = mat.length;
	const columnCount = mat[0].length;
	const neighbors: number[][] = [];
	// The possible directions to move to a neighbor
	const directions = [
		[0, -1], // left
		[0, 1], // right
		[1, 0], // down
		[-1, 0], // up
	];
	for (const direction of directions) {
		const adjacentRow = direction[0] + position[0];
		const adjacentColumn = direction[1] + position[1];
		// Check if the neighbor is within the matrix and unvisited.
		if (
			adjacentRow > -1 &&
			adjacentRow < rowCount &&
			adjacentColumn > -1 &&
			adjacentColumn < columnCount &&
			distances[adjacentRow][adjacentColumn] === -1
		) {
			neighbors.push([adjacentRow, adjacentColumn]);
		}
	}
	return neighbors;
}
