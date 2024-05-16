/**
 * Hard
 * https://leetcode.com/problems/find-k-th-smallest-pair-distance/
 */
function smallestDistancePair(numbers: number[], k: number): number {
	/**
	 * We use binary search on the range of distances between the numbers.
	 * The minimum distance between the numbers is 0.
	 * The maximum distance between the numbers is the difference between
	 * the largest number and the smallest number.
	 * If the number of pairs that have a distance less than or equal to the mid
	 * is less than k, then the distance is too small.
	 * Otherwise, the distance is too large.
	 * We narrow down the search range until only one distance is left.
	 */
	numbers.sort((a, b) => a - b);
	let start = 0;
	let end = numbers[numbers.length - 1] - numbers[0];
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		const count = pairsLessOrEqual(mid, numbers);
		if (count >= k) {
			end = mid;
		} else {
			start = mid + 1;
		}
	}
	return start;
}

function pairsLessOrEqual(distance: number, numbers: number[]): number {
	/**
	 * We use two pointers to count the number of pairs
	 * that have a distance less than or equal to the given distance.
	 * For each number, we find the number of numbers that have a distance
	 * less than or equal to the given distance.
	 * While the distance between the current number and the end number
	 * is less than or equal to the given distance, we increment the end pointer.
	 * The number of pairs between the current number and the end number
	 * is end - start - 1.
	 * We subtract 1 because the end number is not included in the pairs.
	 */
	let count = 0;
	let end = 0;
	for (let start = 0; start < numbers.length; start++) {
		while (
			end < numbers.length &&
			numbers[end] - numbers[start] <= distance
		) {
			end++;
		}
		count += end - start - 1;
	}
	return count;
}
