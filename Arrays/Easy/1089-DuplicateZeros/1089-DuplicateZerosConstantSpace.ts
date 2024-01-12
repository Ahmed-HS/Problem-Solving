/**
    Easy
    https://leetcode.com/problems/duplicate-zeros/
*/
function duplicateZeros(arr: number[]): void {
    let shiftCount = arr.reduce((acc, current) => acc + (current === 0 ? 1 : 0), 0);
    for (let i = arr.length - 1; shiftCount > 0; i--) {
        shiftCount = arr[i] === 0 ? shiftCount - 1 : shiftCount;
        if (i + shiftCount >= arr.length) {
            continue;
        }
        arr[i + shiftCount] = arr[i];
        if (arr[i] === 0 && i + shiftCount + 1 < arr.length) {
            arr[i + shiftCount + 1] = 0;
        }
    }
};