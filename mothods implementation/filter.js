// в скобите трябва да подадем ФУНКЦИЯ като аргумент
// не променя оригиналния масив

let numbers = [2, 8, 7, 3, 11, 40];
console.log(numbers);

function isOdd(number) {
    // може да се съкрати -  let isOdd = n => n % 2 !== 0
    return number % 2 !== 0;
}
// console.log(isOdd(3)); //подава се на функцията и тя връща ресултат true или false
let oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);