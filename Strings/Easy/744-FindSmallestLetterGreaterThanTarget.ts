/**
 * Easy
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 */
function nextGreatestLetter(letters: string[], target: string): string {
	let start = 0;
	let end = letters.length - 1;
	if (letters[end] <= target) {
		return letters[0];
	}
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (letters[mid] <= target) {
			start = mid + 1;
		} else {
			end = mid;
		}
	}
	return letters[start];
}
