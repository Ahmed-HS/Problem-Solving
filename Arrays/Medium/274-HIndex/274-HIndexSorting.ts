/**
 * Medium
 * https://leetcode.com/problems/h-index/
 */
function hIndex(citations: number[]): number {
	citations.sort((a, b) => a - b);
	let maxHIndex = citations.length;
	for (const citation of citations) {
		if (citation < maxHIndex) {
			maxHIndex--;
		} else {
			break;
		}
	}
	return maxHIndex;
}
