/**
 * Hard
 * https://leetcode.com/problems/russian-doll-envelopes/
 */
function maxEnvelopes(envelopes: number[][]): number {
	envelopes.sort((a, b) => {
		return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0];
	});
	const maxEnvelopesUntil = new Array(envelopes.length).fill(1);
	let maxDepth = 1;
	for (let end = 1; end < envelopes.length; end++) {
		for (let current = 0; current < end; current++) {
			if (envelopes[end][1] > envelopes[current][1]) {
				maxEnvelopesUntil[end] = Math.max(
					maxEnvelopesUntil[end],
					maxEnvelopesUntil[current] + 1
				);
			}
		}
		maxDepth = Math.max(maxDepth, maxEnvelopesUntil[end]);
	}
	return maxDepth;
}
