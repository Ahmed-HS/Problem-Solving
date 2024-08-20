/**
 * Medium
 * https://leetcode.com/problems/ones-and-zeroes/
 */
function findMaxForm(strs: string[], m: number, n: number): number {
	const subsetLength = Array.from({ length: strs.length + 1 }, () =>
		Array.from({ length: m + 1 }, () => new Array(n + 1).fill(undefined))
	);
	const bitsCount = strs.map((binaryString) => countBits(binaryString));
	function maxSubsetCount(setLength: number, zeros: number, ones: number) {
		if (zeros < 0 || ones < 0) return -1;
		if (setLength === 0) return 0;
		if (subsetLength[setLength][zeros][ones] !== undefined)
			return subsetLength[setLength][zeros][ones];
		const [zerosCount, onesCount] = bitsCount[setLength - 1];
		const skip = maxSubsetCount(setLength - 1, zeros, ones);
		const take =
			1 +
			maxSubsetCount(setLength - 1, zeros - zerosCount, ones - onesCount);
		subsetLength[setLength][zeros][ones] = Math.max(skip, take);
		return subsetLength[setLength][zeros][ones];
	}
	return maxSubsetCount(strs.length, m, n);
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
