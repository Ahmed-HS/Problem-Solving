/**
 * Medium
 * https://leetcode.com/problems/top-k-frequent-elements/
 */
function topKFrequent(numbers: number[], k: number): number[] {
	const frequency = new Map<number, number>();
	let maxFrequency = 0;
	for (const number of numbers) {
		const count = frequency.get(number) ?? 0;
		frequency.set(number, count + 1);
		maxFrequency = Math.max(maxFrequency, count + 1);
	}
	const frequencyBuckets = new Map<number, number[]>();
	for (const [number, count] of frequency) {
		const bucket = frequencyBuckets.get(count) ?? [];
		bucket.push(number);
		frequencyBuckets.set(count, bucket);
	}
	const topKFrequent = [];
	while (k > 0) {
		const bucket = frequencyBuckets.get(maxFrequency);
		if (bucket) {
			const number = bucket.pop();
			topKFrequent.push(number);
			k--;
			if (bucket.length === 0) {
				maxFrequency--;
			}
		}
	}
	return topKFrequent;
}
