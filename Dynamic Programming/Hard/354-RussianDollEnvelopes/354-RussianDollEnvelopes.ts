/**
 * Hard
 * https://leetcode.com/problems/russian-doll-envelopes/
 */
function maxEnvelopes(envelopes: number[][]): number {
	envelopes.sort((a, b) => {
		return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0];
	});
	const maxEnvelopes = new Array(envelopes.length);
	let maxEnvelopeDepth = 0;
	for (const envelope of envelopes) {
		const insertionIndex = firstOccurrence(
			envelope[1],
			maxEnvelopeDepth,
			maxEnvelopes
		);
		maxEnvelopes[insertionIndex] = envelope[1];
		if (insertionIndex === maxEnvelopeDepth) maxEnvelopeDepth++;
	}
	return maxEnvelopeDepth;
}

function firstOccurrence(
	target: number,
	end: number,
	numbers: number[]
): number {
	let start = 0;
	while (start < end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (numbers[mid] >= target) {
			end = mid;
		} else {
			start = mid + 1;
		}
	}
	return start;
}
