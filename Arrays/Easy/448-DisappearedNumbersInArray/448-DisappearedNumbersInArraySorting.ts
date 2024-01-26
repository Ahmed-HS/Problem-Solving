/**
    Easy
    https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
*/
function findDisappearedNumbers(nums: number[]): number[] {

    const missingNumbers: number[] = [];

    for (const i of nums.keys()) {
        while (nums[nums[i] - 1] !== nums[i]) {
            swap(i, nums[i] - 1, nums);
        }
    }

    for (const i of nums.keys()) {
        if (nums[i] !== i + 1) {
            missingNumbers.push(i + 1);
        }
    }

    return missingNumbers;
}

function swap(i: number, j: number, nums: number[]) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}