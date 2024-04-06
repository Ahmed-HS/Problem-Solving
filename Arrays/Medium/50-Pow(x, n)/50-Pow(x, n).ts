/**
 * Medium
 * https://leetcode.com/problems/powx-n/
 */
function myPow(base: number, power: number): number {
	/**
	 * The idea is to use the binary representation of the power to calculate the result.
	 * For example, if the power is 13, then 13 in binary is 1101.
	 * So, 7^13 = 7^8 * 7^4 * 7^1.
	 * This way, we can calculate the result in O(log n) time.
	 * For each bit in the power, if it is 1, then multiply the result by the base.
	 * Then, square the base to move the next power (7^1,7^2,7^3,7^4,7^5 etc).
	 */
	let result = 1;
	// If the power is negative, then invert the base and power.
	if (power < 0) {
		base = 1 / base;
		power = -power;
	}
	while (power) {
		// If the least significant bit is 1, multiply the result by the base.
		if (power & 1) {
			result *= base;
		}
		base *= base;
		/**
		 * Use the >>> operator to shift the bits to the
		 * right and fill the leftmost bits with 0.
		 */
		power = power >>> 1;
	}
	return result;
}
