function demo(n, arr) {
    let result = [];
    for (let i = n - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    console.log(result.join(" "));
    // join разписан как изглежда
    let string = "";
    for (let i = 0; i < result.length; i++) {
        string += result[i];
        if (i < result.length - 1) {
            string += ", ";
        }
    }
    console.log(string);
}
demo(3, [10, 20, 30, 40, 50]);
demo(4, [-1, 20, 99, 5]);
demo(2, [66, 43, 75, 89, 47]);