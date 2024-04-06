/**
 * Medium
 * https://leetcode.com/problems/powx-n/
 */
function myPow(base: number, power: number): number {
	if (power < 0) return 1 / myPow(base, -power);
	if (power === 0) return 1;
	const halfPower = myPow(base, Math.trunc(power / 2));
	let result = halfPower * halfPower;
	result *= power % 2 === 1 ? base : 1;
	return result;
}
