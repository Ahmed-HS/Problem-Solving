/**
 * Easy
 * https://leetcode.com/problems/fibonacci-number/
 */
function fib(n: number): number {
	const seen = new Map<number, number>();
	function fibMemoized(value: number): number {
		if (value < 2) return value;
		const savedValue = seen.get(value);
		if (savedValue) return savedValue;
		const result = fibMemoized(value - 1) + fibMemoized(value - 2);
		seen.set(value, result);
		return result;
	}
	return fibMemoized(n);
}
