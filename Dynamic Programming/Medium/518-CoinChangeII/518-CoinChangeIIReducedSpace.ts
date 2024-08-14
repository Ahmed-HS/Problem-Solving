/**
 * Medium
 * https://leetcode.com/problems/coin-change-ii/
 */
function change(amount: number, coins: number[]): number {
	// Initialize an array to store the number of ways to make each amount
	// The size is amount + 1 to include 0 and the target amount
	const waysCount = new Array(amount + 1).fill(0);
	// There's one way to make 0: by not using any coins
	waysCount[0] = 1;
	// Iterate through each coin
	for (const coin of coins) {
		// For each coin, iterate through all amounts from the coin value up to the target amount
		for (let value = coin; value <= amount; value++) {
			// Update the number of ways to make the current value
			// by adding the number of ways to make (value - coin)
			waysCount[value] += waysCount[value - coin];
		}
	}
	// Return the number of ways to make the target amount
	return waysCount[amount];
}
