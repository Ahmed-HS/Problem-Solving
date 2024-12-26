/**
 * Medium
 * https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
 */
function numSubseq(numbers: number[], target: number): number {
	const modulo = 10e9 + 7;
	const powers = new Array(numbers.length);
	powers[0] = 1;
	for (let i = 1; i < numbers.length; i++) {
		powers[i] = (2 * powers[i - 1]) % modulo;
	}
	numbers.sort((a, b) => a - b);
	let subsequencesCount = 0;
	let start = 0;
	let end = numbers.length - 1;
	while (start <= end) {
		if (numbers[start] + numbers[end] > target) {
			end--;
		} else {
			const countAfterStart = end - start;
			subsequencesCount += powers[countAfterStart] % modulo;
			start++;
		}
	}
	return subsequencesCount % modulo;
}
