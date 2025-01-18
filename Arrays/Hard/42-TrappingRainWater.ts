/**
 * Hard
 * https://leetcode.com/problems/trapping-rain-water/
 */
function trap(height: number[]): number {
	let left = 0;
	let right = height.length - 1;
	let leftMax = 0;
	let rightMax = 0;
	let trappedWater = 0;

	while (left < right) {
		if (height[left] < height[right]) {
			leftMax = Math.max(leftMax, height[left]);
			trappedWater += leftMax - height[left];
			left++;
		} else {
			rightMax = Math.max(rightMax, height[right]);
			trappedWater += rightMax - height[right];
			right--;
		}
	}

	return trappedWater;
}
