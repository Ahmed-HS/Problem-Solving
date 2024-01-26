/**
    Medium
    https://leetcode.com/problems/max-consecutive-ones-ii/
*/
function findMaxConsecutiveOnes(nums: number[]): number {
    let maxOnesCount = 0;
    let onesCount = 0;
    let countWithZero = 0;
    for (const number of nums) {
        onesCount++;
        if (number === 0) {
            countWithZero = onesCount;
            onesCount = 0;
        } 
        maxOnesCount = Math.max(countWithZero + onesCount, maxOnesCount);
    }
    return maxOnesCount;
}