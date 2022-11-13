// class Person {
//     constructor(firstName, lastName, age, salary) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.salary = salary;

//         if (this.salary == undefined) {
//             this.salary = 10000
//         }
//     }
//     sayHi() {
//         console.log("Hello!");
//     }
// }
// let myPerson = new Person("Peter", "Johnson", 22)
// let mySecondPerson = new Person("ttt", "dddddd", 55)
// console.log(myPerson);
// console.log(mySecondPerson instanceof Person);
// myPerson.sayHi()
// mySecondPerson.sayHi()
// myPerson.age++;
// myPerson.salary += 5000
// console.log(myPerson);

//====================================

function demo(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let cat of input) {
        let [catName, catAge] = cat.split(" ");
        let catt = new Cat(catName, catAge)
        catt.meow()
    }
}
demo(["Mellow 2", "Tom 5"]);