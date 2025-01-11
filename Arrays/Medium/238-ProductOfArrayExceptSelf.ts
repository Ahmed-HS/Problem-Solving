/**
 * Medium
 * https://leetcode.com/problems/product-of-array-except-self/
 */
function productExceptSelf(numbers: number[]): number[] {
	const result = new Array(numbers.length).fill(1);
	let prefixProduct = 1;
	for (let i = 0; i < numbers.length; i++) {
		result[i] *= prefixProduct;
		prefixProduct *= numbers[i];
	}
	let suffixProduct = 1;
	for (let i = numbers.length - 1; i >= 0; i--) {
		result[i] *= suffixProduct;
		suffixProduct *= numbers[i];
	}
	return result;
}
