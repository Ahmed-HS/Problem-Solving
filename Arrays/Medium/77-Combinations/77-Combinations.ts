/**
 * Medium
 * https://leetcode.com/problems/combinations/
 */
function combine(n: number, k: number): number[][] {
	const combinations = [];
	function createCombinations(current: number, combination: number[]) {
		if (combination.length === k) {
			combinations.push(combination);
			return;
		}
		if (current > n) return;
		combination.push(current);
		createCombinations(current + 1, [...combination, current]);
		createCombinations(current + 1, combination);
	}
	createCombinations(1, []);
	return combinations;
}
