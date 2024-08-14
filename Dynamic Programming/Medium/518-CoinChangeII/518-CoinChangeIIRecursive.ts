/**
 * Medium
 * https://leetcode.com/problems/coin-change-ii/
 */
function change(amount: number, coins: number[]): number {
	const waysCount = Array.from({ length: amount + 1 }, () =>
		new Array(coins.length + 1).fill(undefined)
	);
	function exchangeCoins(amount: number, coinIndex = 0): number {
		if (amount < 0 || coinIndex === coins.length) return 0;
		if (amount === 0) return 1;
		if (waysCount[amount][coinIndex] !== undefined)
			return waysCount[amount][coinIndex];
		// Take the coin at the current index
		const takeCoin = exchangeCoins(amount - coins[coinIndex], coinIndex);
		// Skip the coin at the current index
		const skipCoin = exchangeCoins(amount, coinIndex + 1);
		waysCount[amount][coinIndex] = takeCoin + skipCoin;
		return waysCount[amount][coinIndex];
	}
	return exchangeCoins(amount);
}
