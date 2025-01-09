/**
 * Medium
 * https://leetcode.com/problems/h-index/
 */
function hIndex(citations: number[]): number {
	const papersCount = new Array(citations.length + 1).fill(0);
	for (const citation of citations) {
		const bucket = Math.min(citation, citations.length);
		papersCount[bucket]++;
	}
	let paperCount = 0;
	for (let citation = citations.length; citation >= 0; citation--) {
		paperCount += papersCount[citation];
		if (paperCount >= citation) return citation;
	}
	return 0;
}
