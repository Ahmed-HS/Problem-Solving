/**
    Easy
    https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
*/
function replaceElements(arr: number[]): number[] {
    let max = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        const current = arr[i];
        arr[i] = max;
        max = Math.max(current, max);
    }
    return arr;
};