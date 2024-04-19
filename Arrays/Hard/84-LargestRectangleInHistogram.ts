/**
 * Hard
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 */
function largestRectangleArea(heights: number[]): number {
	heights.push(0);
	const lastSeen = [];
	let maxArea = 0;
	for (let end = 0; end < heights.length; end++) {
		while (
			lastSeen.length &&
			heights[end] < heights[lastSeen[lastSeen.length - 1]]
		) {
			const height = heights[lastSeen.pop()];
			const start = lastSeen[lastSeen.length - 1];
			const width = lastSeen.length ? end - start - 1 : end;
			maxArea = Math.max(maxArea, height * width);
		}
		lastSeen.push(end);
	}
	heights.pop();
	return maxArea;
}
