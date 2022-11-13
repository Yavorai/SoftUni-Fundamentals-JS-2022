function demo(n, arr) {
    let slicedArr = [];
    for (let i = 0; i < n; i++) {
        slicedArr.push(arr[i]);
    }
    let result = [];
    for (let i = slicedArr.length - 1; i >= 0; i--) {
        result.push(slicedArr[i]);
    }
    console.log(result.join(" "));

    //take N number of elements from array
    // itarate array from start to finish and stop at index N
    // store values in new array

    // itarate the new array from end to start
    // store values in final array

    // print result on single line
}
// вземи н на брой елементи и ги принтиррай в обратен ред
demo(3, [10, 20, 30, 40, 50]);
demo(4, [-1, 20, 99, 5]);
demo(2, [66, 43, 75, 89, 47]);