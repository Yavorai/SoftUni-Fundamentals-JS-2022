// азбучен или числов ред
// низходящ или възходящ ред
// по дефолт е азбучен възходящ
// прави се compare function за да се поправят грешки

// sort е МОТИРАЩА функция
// променя оригинала

// let names = ["Zdravko", "Angel", "Boyko"];
// console.log(names);
// names.sort();
// console.log(names);

// let names = ["Zdravko", "Angel", "boyko"]; // аски таблица
// console.log(names);
// names.sort();
// console.log(names);

// let names = ["ac", "ab", "aa"]; // аски таблица
// console.log(names);
// names.sort();
// console.log(names);

// let numbers = ["10", "5", "1002"]; // аски таблица
// console.log(numbers);
// numbers.sort();
// console.log(numbers);

// let numbers = [9, 8, 10, 2, 1, 5];
// let compareFunction = function(a, b) {
//     // if (a > b) {
//     //     return 1;
//     // } else if (b > a) {   // сортира ги като ги сравнява две по две
//     //     return -1;
//     // } else {
//     //     return 0;
//     // }
//     // или може да се съкрати
//     return a - b;
// };
// console.log(numbers);
// numbers.sort(compareFunction);
// console.log(numbers);

// или

// let numbers = [9, 8, 10, 2, 1, 5, -50];
// console.log(numbers);
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// LOCAL COMPARE лексигографско подреждане на стрингове
// console.log("zdravko".localeCompare("zzzzzz")); // -1 и 1 връща
// сравнява стрингове

let names = ["Zdravko", "Angel", "anata", "Pesho", "pesho"];
console.log(names);
names.sort((a, b) => a.localeCompare(b));
console.log(names);