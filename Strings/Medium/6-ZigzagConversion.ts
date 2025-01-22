/**
 * Medium
 * https://leetcode.com/problems/zigzag-conversion/
 */
function convert(s: string, numRows: number): string {
	const words = Array.from({ length: s.length }, () => []);
	let doneCount = 0;
	while (doneCount < s.length) {
		for (let i = 0; i < numRows && doneCount < s.length; i++) {
			words[i].push(s[doneCount++]);
		}
		for (let i = numRows - 2; i > 0 && doneCount < s.length; i--) {
			words[i].push(s[doneCount++]);
		}
	}
	return words.map((word) => word.join("")).join("");
}
