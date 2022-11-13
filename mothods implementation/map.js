// прилага една и съща функция върху всеки елемент
// приема елемент и връща променен елемент
// създава нов масив
let numbers = [2, 5, 6];
let mapFunction = function(element) {
    return element * 2;
};
let doubleNumbers = numbers.map((x) => x * 2);

console.log(numbers);
console.log(doubleNumbers);