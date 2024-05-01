/**
 * Easy
 * https://leetcode.com/problems/jewels-and-stones/
 */
function numJewelsInStones(jewels: string, stones: string): number {
	let jewelsCount = 0;
	const jewelsSet = new Set([...jewels]);
	for (const stone of stones) {
		if (jewelsSet.has(stone)) {
			jewelsCount++;
		}
	}
	return jewelsCount;
}
