/**
 * Easy
 * https://leetcode.com/problems/roman-to-integer/
 */
function romanToInt(s: string): number {
	const romanToInt = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
		E: 0,
	};

	let intValue = 0;

	for (let i = 0; i < s.length; i++) {
		const currentValue = romanToInt[s[i]];
		const nextValue = romanToInt[s[i + 1] ?? "E"];

		if (nextValue > currentValue) {
			intValue -= currentValue;
		} else {
			intValue += currentValue;
		}
	}

	return intValue;
}
