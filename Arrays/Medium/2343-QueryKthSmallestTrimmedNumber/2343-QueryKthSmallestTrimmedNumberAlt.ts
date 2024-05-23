/**
 * Medium
 * https://leetcode.com/problems/query-kth-smallest-trimmed-number/
 */
function smallestTrimmedNumbers(
	numbers: string[],
	queries: number[][]
): number[] {
	const result = [];
	for (const [k, trim] of queries) {
		const trimmed = numbers.map((number, index) => ({
			index,
			value: number.slice(-trim),
		}));
		const sorted = trimmed.sort((a, b) => a.value.localeCompare(b.value));
		result.push(sorted[k - 1].index);
	}
	return result;
}
