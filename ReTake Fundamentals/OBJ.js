// function demo(first, second, age) {
//     let person = {
//         sayHello: function() {
//             console.log("bree");
//         },
//         sayNothing: () => console.log("ok"),
//     }
//     person["First Name"] = first
//     person["Last Name"] = second
//     person.age = age
//     person.makeSound = () => console.log("?");
//     // for (let key in person) {
//     //     console.log(`${key}: ${person[key]}`);
//     // }
//     person.sayHello()
//     person.sayNothing()
//     person.makeSound()
// }
// // let result = demo("Peter",
// //     "Pan",
// //     "20")
// // console.log(result);
// demo("Peter",
//     "Pan",
//     "20")

//=================================

// let cat = {}
// cat.name = "Peter"
// cat.color = "Red"
// cat.size = "Big"

// let arrCat = Object.entries(cat)
// for (let key of arrCat) {
//     console.log(`${key[0]} => ${key[1]}`);
// }
// console.log(cat);
//=====================================
// function demo(input) {
//     let keys = Object.keys(input)
//     for (let key of keys) {
//         let value = input[key];
//         console.log(`${key} -> ${value}`);
//     }
// }
// demo({
//     name: "Sofia",
//     area: 492,
//     population: 1238438,
//     country: "Bulgaria",
//     postCode: "1000"
// })

let obj = {}

function make() {
    console.log("ttt");
}
obj["make  sound"] = make
console.log(obj);