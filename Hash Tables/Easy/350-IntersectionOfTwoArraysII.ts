/**
 * Easy
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */
function intersect(nums1: number[], nums2: number[]): number[] {
	const small = nums1.length < nums2.length ? nums1 : nums2;
	const large = small === nums1 ? nums2 : nums1;
	const frequency = new Map();
	for (const number of small) {
		const numberFrequency = frequency.get(number) ?? 0;
		frequency.set(number, numberFrequency + 1);
	}
	const intersection = [];
	for (const number of large) {
		const numberFrequency = frequency.get(number);
		if (numberFrequency > 0) {
			intersection.push(number);
			frequency.set(number, numberFrequency - 1);
		}
	}
	return intersection;
}
