function compareNums(a, b) {
    if (a > b) {
        return 1; // може да се рзместят ако искам в обратен ред
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
    // това се заменя с     a-b       ((a,b) => a - b)
}
let nums = [40, 50, 10, 30, 20];
nums.sort(compareNums);
console.log(nums.join(" "));