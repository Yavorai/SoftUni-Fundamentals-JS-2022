function demo(input){
//let arr = []
for(let i=0; i<input.length / 2; i++){
    let first = input[i]
    let last = input.length - 1 - i
    input[i] = input[last]
    input[last] = first
}
console.log(input.join(" "));
}
demo(["a", "b", "c", "d", "e"])