// предикат true or false

let myArr = [5,8,-3,11,44,13,-8]
let myFunc = x => x > 4
let nums = myFilter(myArr,myFunc)

console.log(nums);

function myFilter (arr, predicate){
    let result = []

    for(let element of arr){
        if(predicate(element)){
            result.push(element)
        }
    }
    return result
}