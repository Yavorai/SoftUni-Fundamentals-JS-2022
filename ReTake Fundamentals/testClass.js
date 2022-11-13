// class Student {
//     constructor(name) {
//         this.name = name;
//         this.speak = () => {
//             console.log("Hi");
//         };
//     }
// }
// let studentOne = new Student("Peter");
// console.log(studentOne);
// studentOne.speak();

//====================================

// function cats(input) {
//     class Cat {
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//             this.meow = () => {
//                 console.log(`${this.name}, age ${this.age} says Meow`);
//             };
//         }
//     }
//     let cats = [];
//     for (let line of input) {
//         let [name, age] = line.split(" ");
//         let currentCat = new Cat(name, age);
//         cats.push(currentCat);
//     }
//     cats.forEach((c) => c.meow());
// }
// cats(['Mellow 2', 'Tom 5'])

// ========================================

// indexOf - finding all the occurrences of an element

let array = ['a', 'b', 'a', 'c', 'a', 'd'];

let indies = [];
let element = 'a';
let idx = array.indexOf(element);
while (idx != -1) {
    indies.push(idx);


    idx = array.indexOf(element, idx + 1); // един вид index++ за да вземе следващата стойност
}
console.log(indies);