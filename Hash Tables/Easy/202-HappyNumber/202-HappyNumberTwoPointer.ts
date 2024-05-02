/**
 * Easy
 * https://leetcode.com/problems/happy-number/
 */
function isHappy(number: number): boolean {
	let slow = number;
	let fast = number;
	do {
		slow = squareOfDigits(slow);
		fast = squareOfDigits(fast);
		fast = squareOfDigits(fast);
	} while (slow !== fast);
	return slow === 1;
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
