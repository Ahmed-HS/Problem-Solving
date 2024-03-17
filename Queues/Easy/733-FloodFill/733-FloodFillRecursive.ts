/**
 * Easy
 * https://leetcode.com/problems/flood-fill/
 */
function floodFill(
	image: number[][],
	sr: number,
	sc: number,
	color: number
): number[][] {
	const targetColor = image[sr][sc];
	if (targetColor === color) {
		return image;
	}
	image[sr][sc] = color;
	const toVisit = [[sr, sc]];
	while (toVisit.length) {
		const [row, column] = toVisit.pop()!;
		const neighbors = getNeighbors([row, column], targetColor, image);
		neighbors.forEach(
			(neighbor) => (image[neighbor[0]][neighbor[1]] = color)
		);
		toVisit.push(...neighbors);
	}
	return image;
}

function getNeighbors(
	position: number[],
	targetColor: number,
	image: number[][]
): number[][] {
	const rowCount = image.length;
	const columnCount = image[0].length;
	const neighbors: number[][] = [];
	// The possible directions to move to a neighbor
	const directions = [
		[0, -1], // left
		[0, 1], // right
		[1, 0], // down
		[-1, 0], // up
	];
	// Loop through each direction to find the neighbors.
	for (const direction of directions) {
		const adjacentRow = direction[0] + position[0];
		const adjacentColumn = direction[1] + position[1];
		// Check if the neighbor is within the image array and is the target color.
		if (
			adjacentRow > -1 &&
			adjacentRow < rowCount &&
			adjacentColumn > -1 &&
			adjacentColumn < columnCount &&
			image[adjacentRow][adjacentColumn] === targetColor
		) {
			// If a valid neighbor is found, add it to the neighbors array.
			neighbors.push([adjacentRow, adjacentColumn]);
		}
	}
	return neighbors;
}
