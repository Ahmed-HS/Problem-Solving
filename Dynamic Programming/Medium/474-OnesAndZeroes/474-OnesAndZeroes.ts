/**
 * Medium
 * https://leetcode.com/problems/ones-and-zeroes/
 */
function findMaxForm(strs: string[], m: number, n: number): number {
	const subsetLength = Array.from({ length: strs.length + 1 }, () =>
		Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	);
	const bitsCount = strs.map((binaryString) => countBits(binaryString));
	for (let length = 1; length <= strs.length; length++) {
		const [zerosCount, onesCount] = bitsCount[length - 1];
		for (let zeros = 0; zeros <= m; zeros++) {
			for (let ones = 0; ones <= n; ones++) {
				const skip = subsetLength[length - 1][zeros][ones];
				const remainingZeros = zeros - zerosCount;
				const remainingOnes = ones - onesCount;
				subsetLength[length][zeros][ones] = skip;
				if (remainingZeros < 0 || remainingOnes < 0) continue;
				const take =
					1 + subsetLength[length - 1][remainingZeros][remainingOnes];
				subsetLength[length][zeros][ones] = Math.max(skip, take);
			}
		}
	}
	return subsetLength[strs.length][m][n];
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
