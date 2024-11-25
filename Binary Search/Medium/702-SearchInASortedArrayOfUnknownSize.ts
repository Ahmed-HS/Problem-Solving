/**
 * Medium
 * https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/
 */
function search(reader: ArrayReader, target: number): number {
	/**
	 * The idea is to find the search range.
	 * We start with the range of 0 to 1.
	 * We double the range until the target is within the range.
	 * Then, we perform binary search on the range.
	 */
	let start = 0;
	let end = 1;
	while (reader.get(end) < target) {
		/**
		 * All the numbers in the range [start, end] are less than the target.
		 * We double the range to [end + 1, end * 2].
		 */
		start = end + 1;
		end *= 2;
	}
	while (start <= end) {
		const mid = start + Math.trunc((end - start) / 2);
		const number = reader.get(mid);
		if (number === target) {
			return mid;
		} else if (number < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return -1;
}

interface ArrayReader {
	get(index: number): number;
}
