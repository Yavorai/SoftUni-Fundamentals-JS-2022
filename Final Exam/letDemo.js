// // let value = "Pesho Ivanov"
// // let accArr = {
// //     [value]: "+5555555445"
// // }
// // // accArr.Lisa = "+945435345"
// // // console.log(accArr["age"]);
// // // accArr["Lisa Smith"] = "555555555"
// // // console.log(accArr);
// // let phoneNumber = accArr["Pesho Ivanov"]
// // console.log(phoneNumber);

// let contacts = {
//     "pesho":  "433442424242",
//     "tosho": "333333333333333",
//     "riko": "333333333342566",
// }
// // for(let key in contacts) {
// //     console.log(contacts[key]);
// // }
// let toArr = Object.entries(contacts)
// for(let [name, value] of toArr) {

//     console.log(`${name} -> ${value}`);
// }

//=======================

// MAP// Array.from()
// let  map = new Map();
// map.set("name", "Pesho")
// map.set("age", "20")
// console.log(map);
// console.log(map.get("name"));
// if(map.has("name")){
//     console.log("Found!");
// }
// delete map.get("name");
// console.log(map);
function storage(input) {
  let store = new Map();
  input.forEach((line) => {
    let [item, quantity] = line.split(" ");
    quantity = Number(quantity);
    if (store.has(item)) {
      let oldQuantity = store.get(item);
      store.set(item, oldQuantity + quantity);
    } else {
      store.set(item, quantity);
    }
  });
  
//   for(let key of store.keys()) {
//       console.log(`${key} -> ${store.get(key)}`);
//   }

  for(let kvp of store.entries()){
      console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}
storage(["to 10", "ro 15", "ko 45", "be 60", "ko 55"]);
