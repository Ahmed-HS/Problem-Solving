/**
    Easy
    https://leetcode.com/problems/remove-duplicates-from-sorted-array/
*/
function removeDuplicates(nums: number[]): number {

    let duplicateIndex = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[duplicateIndex] = nums[i];
            duplicateIndex++;
        }
    }

    return duplicateIndex;
};