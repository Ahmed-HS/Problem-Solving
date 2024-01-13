/**
    Easy
    https://leetcode.com/problems/remove-element/
*/
function removeElement(nums: number[], val: number): number {
    let valueIndex = 0;
    for (const index of nums.keys()) {
        if(nums[index] !== val) {
            nums[valueIndex] = nums[index];
            valueIndex++;
        }
    }
    return valueIndex;
};