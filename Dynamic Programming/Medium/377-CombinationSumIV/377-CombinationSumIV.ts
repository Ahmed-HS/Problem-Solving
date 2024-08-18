/**
 * Medium
 * https://leetcode.com/problems/combination-sum-iv/
 */
function combinationSum4(numbers: number[], target: number): number {
	const seen = new Map<number, number>();
	let waysCount = 0;
	seen.set(0, 1);
	for (let value = 1; value <= target; value++) {
		waysCount = 0;
		for (const number of numbers) {
			waysCount += seen.get(value - number) ?? 0;
		}
		seen.set(value, waysCount);
	}
	return waysCount;
}
