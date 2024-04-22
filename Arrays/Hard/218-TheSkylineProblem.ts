/**
 * Hard
 * https://leetcode.com/problems/the-skyline-problem/
 */
function getSkyline(buildings: number[][]): number[][] {
	return buildSkyline(0, buildings.length - 1, buildings);
}

function buildSkyline(
	start: number,
	end: number,
	buildings: number[][]
): number[][] {
	if (start === end) {
		const skylineStart = [buildings[start][0], buildings[start][2]];
		const skylineEnd = [buildings[start][1], 0];
		return [skylineStart, skylineEnd];
	}
	const midpoint = start + Math.trunc((end - start) / 2);
	const left = buildSkyline(start, midpoint, buildings);
	const right = buildSkyline(midpoint + 1, end, buildings);
	return mergeSkylines(left, right);
}

function mergeSkylines(left: number[][], right: number[][]): number[][] {
	const mergedSkylines = [];
	let leftIndex = 0;
	let rightIndex = 0;
	let leftHeight = 0;
	let rightHeight = 0;
	let lastHeight = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		const x1 = left[leftIndex][0];
		const x2 = right[rightIndex][0];
		if (x1 < x2) {
			leftHeight = left[leftIndex][1];
			leftIndex++;
		} else if (x1 > x2) {
			rightHeight = right[rightIndex][1];
			rightIndex++;
		} else {
			leftHeight = left[leftIndex][1];
			rightHeight = right[rightIndex][1];
			leftIndex++;
			rightIndex++;
		}
		const x = Math.min(x1, x2);
		const height = Math.max(leftHeight, rightHeight);
		if (height !== lastHeight) {
			mergedSkylines.push([x, height]);
			lastHeight = height;
		}
	}
	while (leftIndex < left.length) {
		mergedSkylines.push(left[leftIndex]);
		leftIndex++;
	}
	while (rightIndex < right.length) {
		mergedSkylines.push(right[rightIndex]);
		rightIndex++;
	}
	return mergedSkylines;
}
