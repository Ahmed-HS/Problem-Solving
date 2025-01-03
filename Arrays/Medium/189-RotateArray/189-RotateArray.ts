/**
 * Medium
 * https://leetcode.com/problems/rotate-array/
 */
function rotate(nums: number[], k: number): void {
	/**
	 * Shift every element in the array by `k` positions to the right.
	 * Keep track of the number of elements we have shifted
	 * to check if we have shifted all elements.
	 * Start at the first element and keep shifting until
	 * the first element is reached again to complete a cycle.
	 * We then move to the next element and repeat the process.
	 */
	k = k % nums.length;
	let shiftedCount = 0;
	for (let start = 0; shiftedCount < nums.length; start++) {
		let current = start;
		let currentValue = nums[start];
		do {
			const next = (current + k) % nums.length;
			const nextValue = nums[next];
			nums[next] = currentValue;
			currentValue = nextValue;
			current = next;
			shiftedCount++;
		} while (start !== current);
	}
}
