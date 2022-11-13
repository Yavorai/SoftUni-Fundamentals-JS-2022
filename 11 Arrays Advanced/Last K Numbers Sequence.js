function demo(n,k){
// fibonacii

// create variable to hold result, starting with 1
// repeat n times
// calculate next element
// -- slice from result k elements from the end 
// -- sum sliced elements
// store element

// print result

let result = [1]
for(let i = 1; i < n; i++){
    let current = 0
    let elements = result.slice(-k)
    console.log(elements);
    for(let num of elements){
        current += num
    }
    result.push(current)
}
console.log(result.join(" "));
}
demo(6, 3)
// demo(8, 2)