function demo(n, numbers){
let nNumbers = [];
let reversed = []
for(let index = 0; index < n; index++){
    nNumbers.push(numbers[index]);
}
for(let index = nNumbers.length -1; index >= 0; index--){
    reversed.push(numbers[index]);
}
console.log(reversed.join(" "));
}
demo(3,["10","20","30","40","50"])

//  console.log(input.slice(0,n).reverse().join(""))