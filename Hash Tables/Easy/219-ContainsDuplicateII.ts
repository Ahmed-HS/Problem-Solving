/**
 * Easy
 * https://leetcode.com/problems/contains-duplicate-ii/
 */
function containsNearbyDuplicate(numbers: number[], k: number): boolean {
	const seen = new Map();
	for (const [index, number] of numbers.entries()) {
		const numberIndex = seen.get(number);
		if (Math.abs(index - numberIndex) <= k) {
			return true;
		}
		seen.set(number, index);
	}
	return false;
}
