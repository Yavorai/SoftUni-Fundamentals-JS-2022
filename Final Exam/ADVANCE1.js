function solve(arr) {
 
    //const result1 = arr.reduce((a, b) => a + b);
    const result2 = arr.reduce((a, b) => a + 1 / b, 1);
   // const result3 = arr.join("");
    //console.log(result1);
    console.log(result2);
   //console.log(result3);
}
solve([1,2,3])