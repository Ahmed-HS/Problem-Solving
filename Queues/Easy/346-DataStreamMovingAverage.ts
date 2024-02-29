/**
 * Easy
 * https://leetcode.com/problems/moving-average-from-data-stream/
 */
let size: number;
let sum: number = 0;
let count: number = 0;
let values: number[];

function initializeMovingAverage(windowSize: number): void {
	size = windowSize;
	sum = 0;
	count = 0;
	values = new Array(windowSize).fill(0);
}

function next(value: number): number {
	const insertIndex = count % size;
	sum -= values[insertIndex];
	values[insertIndex] = value;
	sum += value;
	count++;
	return sum / Math.min(count, size);
}
