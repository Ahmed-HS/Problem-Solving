/**
    Easy
    https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
*/
function findDisappearedNumbers(nums: number[]): number[] {
    for (const num of nums) {
        const index = Math.abs(num) - 1;
        nums[index] = Math.abs(nums[index]) * -1;
    }

    const missingNumbers: number[] = [];
    for (const i of nums.keys()) {
        if (nums[i] > 0) {
            missingNumbers.push(i + 1);
        }
    }
    return missingNumbers;
};