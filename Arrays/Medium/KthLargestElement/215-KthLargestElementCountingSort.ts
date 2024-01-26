/**
    Medium
    https://leetcode.com/problems/kth-largest-element-in-an-array/
*/
function findKthLargest(nums: number[], k: number): number {

    const frequency = new Map();
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;

    for (const number of nums) {
        const oldCount = frequency.get(number) ?? 0;
        frequency.set(number, oldCount + 1);
        max = Math.max(max, number);
        min = Math.min(min, number);
    }

    let currentNumber = max;
    while (currentNumber >= min) {
        const count = frequency.get(currentNumber) ?? 0;
        k -= count;
        if (k <= 0) {
            break;
        }
        currentNumber--;
    }

    return currentNumber;
}