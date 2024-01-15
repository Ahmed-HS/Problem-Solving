/**
    Easy
    https://leetcode.com/problems/duplicate-zeros/
*/
function duplicateZeros(arr: number[]): void {
    const zerosDuplicated = new Array<number>(arr.length);
    let resultIndex = 0;
    for (const i in arr) {
        zerosDuplicated[resultIndex] = arr[i];
        if (arr[i] === 0) {
            resultIndex++;
            zerosDuplicated[resultIndex] = 0;
        }
        arr[i] = zerosDuplicated[i];
        resultIndex++;
    }
};