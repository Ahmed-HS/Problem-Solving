/**
 * Easy
 * https://leetcode.com/problems/intersection-of-two-arrays/
 */
function intersection(nums1: number[], nums2: number[]): number[] {
	nums1.sort((a, b) => a - b);
	nums2.sort((a, b) => a - b);
	let i = 0;
	let j = 0;
	const intersection = new Set<number>();
	while (i < nums1.length && j < nums2.length) {
		if (nums1[i] < nums2[j]) {
			i++;
		} else if (nums2[j] < nums1[i]) {
			j++;
		} else {
			intersection.add(nums1[i]);
			i++;
			j++;
		}
	}
	return [...intersection];
}
