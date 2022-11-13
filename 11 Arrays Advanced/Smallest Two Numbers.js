function demo(arr){
    let ascendSorting = arr.sort((a,b) => a - b)
    let result = ascendSorting.slice(0,2)
    return result.join(" ")
}
console.log(demo([30, 15, 50, 5]));
console.log(demo([3, 0, 10, 4, 7, 3]));

