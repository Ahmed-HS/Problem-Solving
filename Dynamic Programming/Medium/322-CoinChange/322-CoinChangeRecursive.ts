/**
 * Medium
 * https://leetcode.com/problems/coin-change/
 */
function coinChange(coins: number[], amount: number): number {
	const coinCount = new Map<number, number>();
	function minimumChange(value: number) {
		if (value < 0) return Infinity;
		if (value === 0) return 0;
		const savedCount = coinCount.get(value);
		if (savedCount !== undefined) return savedCount;
		let coinsExchanged = Infinity;
		for (const coin of coins) {
			const takeCoin = minimumChange(value - coin) + 1;
			coinsExchanged = Math.min(coinsExchanged, takeCoin);
		}
		coinCount.set(value, coinsExchanged);
		return coinsExchanged;
	}
	const coinsExchanged = minimumChange(amount);
	return coinsExchanged === Infinity ? -1 : coinsExchanged;
}
