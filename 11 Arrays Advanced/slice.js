let myArr = [5,8,-3,11,44,13,-8]
let newArr = mySlice(myArr,1,3)
console.log("original", myArr);
console.log("sliced", newArr);

function mySlice(arr,start,end){
    // create variable to store result
    // iterate through all elements starting at index "start" and stopping before index "end"
    // - copy element to result
    // return result

    if(start == undefined){
        start = 0
    }
    if(end == undefined){
        end.arr.length
    }

    let result = []

    for(let i = start; i < end; i++){
        result.push(arr[i])
    }
    return result
}