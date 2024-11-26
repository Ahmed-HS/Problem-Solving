/**
 * Medium
 * https://leetcode.com/problems/valid-triangle-number/
 */
function triangleNumber(sides: number[]): number {
	// Sort the array in descending order (largest to smallest).
	sides.sort((a, b) => b - a);

	let count = 0; // Initialize counter for valid triangles.

	// Iterate over the array, treating sides[largest] as the largest side.
	for (let largest = 0; largest < sides.length - 2; largest++) {
		let left = largest + 1; // Start of the remaining sides.
		let right = sides.length - 1; // End of the remaining sides.

		// Use a two-pointer approach to find pairs satisfying the triangle inequality.
		while (left < right) {
			// Check if the sum of the two smaller sides is greater than the largest side.
			if (sides[left] + sides[right] > sides[largest]) {
				count += right - left; // All pairs between left and right are valid.
				left++; // Move the left pointer to the right to try a smaller sum.
			} else {
				right--; // Move the right pointer to the left to try a larger sum.
			}
		}
	}
	return count; // Return the total number of valid triangles.
}
