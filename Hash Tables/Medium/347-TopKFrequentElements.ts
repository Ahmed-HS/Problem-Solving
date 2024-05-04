/**
 * Medium
 * https://leetcode.com/problems/top-k-frequent-elements/
 */
function topKFrequent(numbers: number[], k: number): number[] {
	const frequency = new Map<number, number>();
	for (const number of numbers) {
		const count = frequency.get(number) ?? 0;
		frequency.set(number, count + 1);
	}
	const sorted = [...frequency.entries()].sort((n1, n2) => n2[1] - n1[1]);
	return sorted.slice(0, k).map((pair) => pair[0]);
}
