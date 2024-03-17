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
	if (targetColor !== color) {
		fill(sr, sc, color, targetColor, image);
	}
	return image;
}

function fill(
	i: number,
	j: number,
	newColor: number,
	targetColor: number,
	image: number[][]
) {
	image[i][j] = newColor;
	const directions = [
		[0, -1],
		[0, 1],
		[1, 0],
		[-1, 0],
	];
	for (const direction of directions) {
		if (
			i + direction[0] > -1 &&
			i + direction[0] < image.length &&
			j + direction[1] > -1 &&
			j + direction[1] < image[0].length &&
			image[i + direction[0]][j + direction[1]] === targetColor
		) {
			fill(
				i + direction[0],
				j + direction[1],
				newColor,
				targetColor,
				image
			);
		}
	}
}
