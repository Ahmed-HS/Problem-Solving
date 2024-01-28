/**
 * Easy
 * https://leetcode.com/problems/max-consecutive-ones/
 */
function findMaxConsecutiveOnes(nums: number[]): number {
    let onesCount = 0;
    let maxOnesCount = 0;
    for (const number of nums) {
        onesCount = number === 0 ? 0 : onesCount + 1;
        maxOnesCount = Math.max(onesCount, maxOnesCount);
    }
    return maxOnesCount;
}