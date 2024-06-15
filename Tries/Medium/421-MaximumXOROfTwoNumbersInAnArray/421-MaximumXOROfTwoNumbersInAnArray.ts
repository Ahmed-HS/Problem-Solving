/**
 * Medium
 * https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
 */
function findMaximumXOR(nums: number[]): number {
	let max = 0;
	let mask = 0;
	for (let i = 31; i >= 0; i--) {
		mask |= 1 << i;
		const prefixes = new Set<number>();
		for (const num of nums) {
			prefixes.add(num & mask);
		}
		const start = max | (1 << i);
		for (const prefix of prefixes) {
			const complement = start ^ prefix;
			if (prefixes.has(complement)) {
				max = start;
				break;
			}
		}
	}
	return max;
}
