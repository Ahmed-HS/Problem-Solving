/**
 * Medium
 * https://leetcode.com/problems/random-pick-with-weight/
 */
class Solution {
	private prefixSums: number[];
	private totalSum: number;
	constructor(w: number[]) {
		this.prefixSums = new Array(w.length);
		this.totalSum = 0;
		for (let i = 0; i < w.length; i++) {
			this.totalSum += w[i];
			this.prefixSums[i] = this.totalSum;
		}
	}

	pickIndex(): number {
		const random = Math.ceil(Math.random() * this.totalSum);
		let start = 0;
		let end = this.prefixSums.length - 1;
		while (start <= end) {
			const mid = start + Math.trunc((end - start) / 2);
			if (this.prefixSums[mid] === random) {
				return mid;
			} else if (random > this.prefixSums[mid]) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}
		return start;
	}
}
