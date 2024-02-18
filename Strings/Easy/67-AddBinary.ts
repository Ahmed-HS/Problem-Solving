/**
 * Easy
 * https://leetcode.com/problems/add-binary/
 */
function addBinary(a: string, b: string): string {
	const sum: number[] = [];
	let i = a.length - 1;
	let j = b.length - 1;
	let carry = 0;
	while (i > -1 || j > -1 || carry) {
		const bitOne = +(a[i] ?? 0);
		const bitTwo = +(b[j] ?? 0);
		const bitSum = bitOne + bitTwo + carry;
		carry = Math.floor(bitSum / 2);
		sum.push(bitSum % 2);
		i--;
		j--;
	}
	sum.reverse();
	return sum.join("");
}
