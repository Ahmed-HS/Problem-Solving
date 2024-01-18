/**
    Easy
    https://leetcode.com/problems/move-zeroes/
*/
function moveZeroes(nums: number[]): void {
    let zeroIndex = 0;
    for (const i in nums) {
        if (nums[i] !== 0) {
            [nums[zeroIndex], nums[i]] = [nums[i], nums[zeroIndex]];
            zeroIndex++;
        }
    }
};