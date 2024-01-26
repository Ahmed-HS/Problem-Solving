/**
    Easy
    https://leetcode.com/problems/remove-element/
*/
function removeElement(nums: number[], val: number): number {
    let valueIndex = 0;
    for (const i of nums.keys()) {
        if (nums[i] !== val) {
            nums[valueIndex] = nums[i];
            valueIndex++;
        }
    }
    return valueIndex;
}