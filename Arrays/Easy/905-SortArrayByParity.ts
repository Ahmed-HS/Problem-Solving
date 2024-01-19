/**
    Easy
    https://leetcode.com/problems/sort-array-by-parity/
*/
function sortArrayByParity(nums: number[]): number[] {
    let oddIndex = 0;
    for (const i in nums) {
        if (nums[i] % 2 === 0) {
            [nums[oddIndex], nums[i]] = [nums[i], nums[oddIndex]];
            oddIndex++;
        }
    }
    return nums;
};