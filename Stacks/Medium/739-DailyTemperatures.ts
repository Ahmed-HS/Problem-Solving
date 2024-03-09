/**
 * Medium
 * https://leetcode.com/problems/daily-temperatures/
 */
function dailyTemperatures(temperatures: number[]): number[] {
	// Create an array to store the number of days until a greater temperature.
	const distance = new Array(temperatures.length).fill(0);
	// Create an array to store the indices of the temperatures that have been seen.
	const lastSeen = [];
	for (let i = 0; i < temperatures.length; i++) {
		/**
		 * As we are moving from left to right, the first temperature we
		 * see that is greater than the last seen temperature will have the
		 * shortest distance to that seen temperature. So, we can remove
		 * the last seen temperature from the array and update the number
		 * of days until a greater temperature for the removed temperature.
		 */
		while (
			lastSeen.length &&
			temperatures[i] > temperatures[lastSeen[lastSeen.length - 1]]
		) {
			/**
			 * Remove the last seen temperature to continue
			 * checking temperatures seen before it.
			 */
			const lastIndex = lastSeen.pop();
			// Update the number of days until a warmer temperature for the removed temperature.
			distance[lastIndex] = i - lastIndex;
		}
		// Add the index of the current temperature to the array of seen temperatures.
		lastSeen.push(i);
	}
	return distance;
}
