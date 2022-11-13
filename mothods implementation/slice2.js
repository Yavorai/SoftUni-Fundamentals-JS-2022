// // създава нов масив, не променя оригинала
// // взима елементи от нешо (индекс) (включително) до нещо (индекс) (невключително)

// let numbers = [10, 20, 30];
// let nums = numbers; //прави референция и двете сочат към масива в heap
// numbers[0]++;
// console.log(numbers);
// console.log(nums);
// // ако се копира стойност се нарича КЛОНИРАНЕ

//======================================================================
// function iPop(arr) {
//     arr.pop();
// }
// let numbers = [1, 2, 3, 4];
// iPop(numbers);
// console.log(numbers)
//========================================================================

// let numbers = [10, 20, 30, 40, 50, 60];
// let newNumbers = numbers.slice(2); // първия параметър е inclusive вторият е exclusive
// console.log(newNumbers);

// let numbers = [10, 20, 30, 40, 50, 60];
// let newNumbers = numbers.slice(2, 4); // първия параметър е inclusive вторият е exclusive
// console.log(newNumbers);

// копиране на масив

// let numbers = [10, 20, 30];
// let copyNumbers = numbers.slice();
// copyNumbers[0]++;
// console.log(numbers);
// console.log(copyNumbers);

//============================================
const numbers = [10, 20, 30, 40];
let newA = numbers.slice(1, numbers.length - 2);
console.log(newA);