/**
 * Easy
 * https://leetcode.com/problems/plus-one/
 */
function plusOne(digits: number[]): number[] {
	for (let i = digits.length - 1; i >= 0; i--) {
		// If the digit is less than 9, we can just add 1 and return the array
		if (digits[i] < 9) {
			digits[i]++;
			return digits;
		}
		/**
		 * If the digit is 9, we need to set it to 0,
		 * then continue until we find a digit that is less than 9
		 * to add the carry of 1 to it.
		 */
		digits[i] = 0;
	}

	/**
	 * If we reach this point, it means that all the digits are 9,
	 * so we need to add a 1 at the beginning of the array.
	 */
	digits.unshift(1);
	return digits;
}
