function demo(arr) {
    // for each element at index i calculate corresponding index k
    // k = length - 1 - i
    // stop at middle
    for (let i = 0; i < (arr.length - 1) / 2; i++) {
        let k = arr.length - 1 - i;
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
    console.log(arr.join(" "));
}
demo(["a", "b", "c", "d", "e", "a", "b", "c", "d", "e"]);