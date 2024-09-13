/**
 * Medium
 * https://leetcode.com/problems/minimum-cost-for-tickets/
 */
function mincostTickets(days: number[], costs: number[]): number {
	const minimumCost = new Array(days.length);
	function findMinimumCost(dayIndex: number) {
		if (dayIndex === days.length) return 0;
		if (minimumCost[dayIndex] !== undefined) return minimumCost[dayIndex];
		const today = days[dayIndex];
		const buy1Day =
			findMinimumCost(search(today + 1, dayIndex, days)) + costs[0];
		const buy7Days =
			findMinimumCost(search(today + 7, dayIndex, days)) + costs[1];
		const buy30Days =
			findMinimumCost(search(today + 30, dayIndex, days)) + costs[2];
		minimumCost[dayIndex] = Math.min(buy1Day, buy7Days, buy30Days);
		return minimumCost[dayIndex];
	}
	return findMinimumCost(0);
}

function search(target: number, start: number, numbers: number[]): number {
	let end = numbers.length - 1;
	while (start <= end) {
		const mid = start + Math.trunc((end - start) / 2);
		if (numbers[mid] === target) {
			return mid;
		}
		if (numbers[mid] > target) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return start;
}
