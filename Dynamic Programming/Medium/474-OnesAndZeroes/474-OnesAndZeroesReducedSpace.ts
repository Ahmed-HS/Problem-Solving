/**
 * Medium
 * https://leetcode.com/problems/ones-and-zeroes/
 */
function findMaxForm(strs: string[], m: number, n: number): number {
	const subsetLength = Array.from({ length: m + 1 }, () =>
		new Array(n + 1).fill(0)
	);
	const bitsCount = strs.map((binaryString) => countBits(binaryString));
	for (const [zerosCount, onesCount] of bitsCount) {
		for (let zeros = m; zeros >= zerosCount; zeros--) {
			for (let ones = n; ones >= onesCount; ones--) {
				const skip = subsetLength[zeros][ones];
				const take =
					1 + subsetLength[zeros - zerosCount][ones - onesCount];
				subsetLength[zeros][ones] = Math.max(skip, take);
			}
		}
	}
	return subsetLength[m][n];
}

function countBits(binaryString: string) {
	let onesCount = 0;
	let zerosCount = 0;
	for (const bit of binaryString) {
		if (bit === "0") {
			zerosCount++;
		} else {
			onesCount++;
		}
	}
	return [zerosCount, onesCount];
}
