/**
 * Medium
 * https://leetcode.com/problems/4sum-ii/
 */
function fourSumCount(
	nums1: number[],
	nums2: number[],
	nums3: number[],
	nums4: number[]
): number {
	/**
	 * n1 + n2 + n3 + n4 = 0
	 * -(n1 + n2) = (n3 + n4)
	 * First calculate the frequency of n3 + n4 pairs,
	 * Because each pair has unique indices, So we to
	 * consider every pair of n3 and n4.
	 * Then for each pair of n1 and n2, check if the
	 * frequency of -(n1 + n2) exists in the n3n4PairsFrequency
	 * If it exists, add the frequency to the tuplesCount.
	 */
	let tuplesCount = 0;
	const n3n4PairsFrequency = new Map<number, number>();
	for (const n3 of nums3) {
		for (const n4 of nums4) {
			const count = n3n4PairsFrequency.get(n3 + n4) ?? 0;
			n3n4PairsFrequency.set(n3 + n4, count + 1);
		}
	}
	for (const n1 of nums1) {
		for (const n2 of nums2) {
			tuplesCount += n3n4PairsFrequency.get(-(n1 + n2)) ?? 0;
		}
	}
	return tuplesCount;
}
