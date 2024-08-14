/**
 * Medium
 * https://leetcode.com/problems/coin-change-ii/
 */
function change(amount: number, coins: number[]): number {
	const waysCount = Array.from(
		{ length: amount + 1 },
		() => new Array(coins.length + 1)
	);
	for (let coinIndex = 1; coinIndex <= coins.length; coinIndex++) {
		waysCount[0][coinIndex] = 1;
	}
	for (let value = 1; value <= amount; value++) {
		waysCount[value][0] = 0;
		for (let coinCount = 1; coinCount <= coins.length; coinCount++) {
			const currentCoin = coins[coinCount - 1];
			// Ways to make the value without the current coin
			waysCount[value][coinCount] = waysCount[value][coinCount - 1];
			// Ways to make the value with the current coin
			if (value >= currentCoin) {
				waysCount[value][coinCount] +=
					waysCount[value - currentCoin][coinCount];
			}
		}
	}
	return waysCount[amount][coins.length];
}
