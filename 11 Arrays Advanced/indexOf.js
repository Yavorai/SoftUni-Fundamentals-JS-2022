let myArr = [5,8,-3,11,44,13,-8]

console.log(myIndexOf(myArr,8));
console.log(myIndexOf(myArr,11));
console.log(myIndexOf(myArr,10));
function myIndexOf(arr, value){
     // iterate through all elements nad compare them with the value
    // if a single element is a match return its index
    // at the end of the array return -1

    for(let i =0; i < arr.length;i++){
        let element = arr[i]
        if(element == value){
            return i
        }
    }
    return -1
}