/**
 * Easy
 * https://leetcode.com/problems/intersection-of-two-arrays/
 */
function intersection(nums1: number[], nums2: number[]): number[] {
	const small = nums1.length < nums2.length ? nums1 : nums2;
	const large = small === nums1 ? nums2 : nums1;
	const uniqueSmall = new Set<number>(small);
	const intersection = new Set<number>();
	for (const number of large) {
		if (uniqueSmall.has(number)) {
			intersection.add(number);
		}
	}
	return [...intersection];
}
