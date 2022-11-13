let myArr = [5,8,-3,11,44,13,-8]
console.log("before", myArr);
let removed = mySplice(myArr,3,2,["a", "b", "c", "d"]) // 
console.log("after", myArr);
console.log("removed", removed);

function mySplice(arr,start,count,insert){
    
    // slice from 0 to "start" (left part)
    // slice form "start" to "start" + "count" (removed part)
    // slice from "start" + "count" to end (right part)

    // delete all elements from arr

    // push all elements from left part to arr
    // push new elements to arr
    // push all elements form right part to arr

    // return removed part 

    let left = arr.slice(0,start)
    let removed = arr.slice(start, start + count)
    let right = arr.slice(start + count)

    arr.length = 0

    for(let element of left){
        arr.push(element)
    }

    if(insert !== undefined){
        for(let element of insert){
            arr.push(element)
        }
    }
   
    for(let element of right){
        arr.push(element)
    }
    return removed
}   