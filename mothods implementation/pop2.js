// // маха последния елемент и го връща
// // променя масива
// let numbers = [10, 20, 30, 40];
// console.log(numbers);
// let lastNumber = numbers.pop();
// console.log(lastNumber);
// console.log(numbers);
//=========================================
// имплементация
function iPop(arr) {
    // трябва да махнем последния и да го ретърнем
    let lastElement = arr[arr.length - 1];
    arr.length = arr.length - 1; // или  arr.length--
    return lastElement;
}
let numbers = [10, 20, 30, 40];
console.log(numbers);
let lastNumber = iPop(numbers);
console.log(lastNumber);
console.log(numbers);