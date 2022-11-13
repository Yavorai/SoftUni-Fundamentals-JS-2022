let myArr = [5,8,-3,11,44,13,-8]
console.log(myIncludes(myArr,8));
console.log(myIncludes(myArr,10));

function myIncludes (arr, value){
    // iterate through all elements nad compare them with the value
    // if a single element is a match return true
    // at the end of the array return false

    for(let element of arr){
        if(element == value){
            return true
        }
    }
    return false
}