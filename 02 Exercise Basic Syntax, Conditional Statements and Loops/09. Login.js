// function login(input) {
//   let index = 0;
//   let username = String(input[index++]);
//   let pass = username.split("").reverse().join("");

//   for (let i = 1; i <= 4; i++) {
//     let command = String(input[index++]);
//     if (command === pass) {
//       console.log(`User ${username} logged in.`);
//       break;
//     } else if (i < 4) {
//       console.log(`Incorrect password. Try again.`);
//     } else {
//       console.log(`User ${username} blocked!`);
//     }
//   }
// }

// login(["Acer", "login", "go", "let me in", "recA"]);

// function login(list) {
//   // let userName = list.shift()
//   // let reversed = userName.split("").reverse().join("")

//   // console.log(reversed)
//   let userName = list.shift();
//   let password = userName.split("").reverse().join("");

//   let counter = 1;
//   while (true) {
//     // трябва да има поне един БРЕЙК иначе ще е безкраен
//     let enteredPass = list.shift();
//     if (counter === 4) {
//       console.log(`User ${userName} blocked!`);
//       break;
//     }
//     if (enteredPass === password) {
//       console.log(`User ${userName} logged in.`);
//       break;
//     } else {
//       console.log("Incorrect pass. Try again.");
//     }
//     counter++;
//   }
// }
// login(["Acer", "login", "go", "let me in", "recA"]);
// console.log("==================");
// login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
// console.log("==================");
// login(["momo", "omom"]);

//===========================================
function login(size) {
  let password = size.shift();
  let reversedPass = "";
  let failCount = 1;
  for (let i = password.length - 1; i >= 0; i--) {
    reversedPass += password[i];
  }
  for (let i = 0; i < size.length; i++) {
    if (failCount === 4 && size[i] !== reversedPass) {
      console.log("User", password, "blocked!");
      break;
    }
    if (size[i] !== reversedPass) {
      console.log("Incorrect password. Try again.");
      failCount++;
    } else {
      console.log("User", password, "logged in.");
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
console.log("==================");
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
console.log("==================");
login(["momo", "omom"]);
