/**
 * Easy
 * https://leetcode.com/problems/climbing-stairs/
 */
function climbStairs(n: number): number {
	const seen = new Map<number, number>();
	function waysCount(value: number): number {
		if (value < 3) return value;
		const savedValue = seen.get(value);
		if (savedValue) return savedValue;
		const result = waysCount(value - 1) + waysCount(value - 2);
		seen.set(value, result);
		return result;
	}
	return waysCount(n);
}
