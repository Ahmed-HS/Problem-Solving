/**
 * Medium
 * https://leetcode.com/problems/coin-change/
 */
function coinChange(coins: number[], amount: number): number {
	const coinCount = new Map<number, number>();
	coinCount.set(0, 0);
	for (let value = 1; value <= amount; value++) {
		let coinsExchanged = Infinity;
		for (const coin of coins) {
			const takeCoin = (coinCount.get(value - coin) ?? Infinity) + 1;
			coinsExchanged = Math.min(coinsExchanged, takeCoin);
		}
		coinCount.set(value, coinsExchanged);
	}
	const coinsExchanged = coinCount.get(amount);
	return coinsExchanged === Infinity ? -1 : coinsExchanged;
}
