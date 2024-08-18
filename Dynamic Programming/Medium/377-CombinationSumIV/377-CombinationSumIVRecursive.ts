/**
 * Medium
 * https://leetcode.com/problems/combination-sum-iv/
 */
function combinationSum4(numbers: number[], target: number): number {
	const seen = new Map<number, number>();
	function combinationsCount(value: number) {
		if (value < 0) return 0;
		if (value === 0) return 1;
		const savedValue = seen.get(value);
		if (savedValue !== undefined) return savedValue;
		let waysCount = 0;
		for (const number of numbers) {
			waysCount += combinationsCount(value - number);
		}
		seen.set(value, waysCount);
		return waysCount;
	}
	return combinationsCount(target);
}
