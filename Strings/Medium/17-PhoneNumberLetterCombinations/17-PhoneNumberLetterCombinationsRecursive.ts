/**
 * Medium
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */
function letterCombinations(digits: string): string[] {
	if (!digits.length) return [];
	const mappings = {
		"2": "abc",
		"3": "def",
		"4": "ghi",
		"5": "jkl",
		"6": "mno",
		"7": "pqrs",
		"8": "tuv",
		"9": "wxyz",
	};
	const letterCombinations = [];
	function createCombinations(current: number, combination: string[]) {
		if (combination.length === digits.length) {
			letterCombinations.push(combination.join(""));
			return;
		}
		for (const letter of mappings[digits[current]]) {
			combination.push(letter);
			createCombinations(current + 1, combination);
			combination.pop();
		}
	}
	createCombinations(0, []);
	return letterCombinations;
}
