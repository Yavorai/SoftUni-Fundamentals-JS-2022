function demo(arr){
    let result = []
    for(let num of arr){
        if(!result.includes(num)){
            result.push(num)
        }
    }
    console.log(result.join(" "));
}
demo([1, 2, 3, 4])
console.log("----------");
demo([7, 8, 9, 7, 2, 3, 4, 1, 2])
console.log("----------");
demo([20, 8, 12, 13, 4, 4, 8, 5])