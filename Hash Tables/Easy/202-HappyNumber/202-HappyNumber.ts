/**
 * Easy
 * https://leetcode.com/problems/happy-number/
 */
function isHappy(number: number): boolean {
	const seen = new Set();
	while (number !== 1) {
		if (seen.has(number)) return false;
		seen.add(number);
		number = squareOfDigits(number);
	}
	return true;
}

function squareOfDigits(number: number) {
	let result = 0;
	while (number) {
		const digit = number % 10;
		result += digit * digit;
		number = Math.trunc(number / 10);
	}
	return result;
}
