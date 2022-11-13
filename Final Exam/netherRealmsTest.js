// function solve(input) {
//   let demons = input.split(/,\s*/).sort((a, b) => a.localeCompare(b));

//   for (let demon of demons) {
//     if (demon.includes(" ") === false) {
//       console.log(
//         `${demon} - ${health(demon)} health, ${damage(demon)} damage`
//       );
//     }
//   }
//   function health(string) {
//     let pattern = /[0-9+\-*,\/.]*/g;
//     let result = string
//       .replace(pattern, "")
//       .split("")
//       .map((x) => x.charCodeAt(0));
//     if (result.length > 0) {
//       //result = result.reduce((a,b) => a+b)
//       //return result
//       let sum = 0;
//       for (let ch of result) {
//         sum += Number(ch);
//       }
//       result = sum;
//       return result;
//     }
//   }

//   function damage(string) {
//     let pattern = /\-?[0-9\.]+/g;
//     let symbol = /[0-9]([*\/]+)/g;
//     let numbers = string.match(pattern);
//     let result = 0;
//     if (numbers != null) {
//       result = numbers.map(Number).reduce((a, b) => a + b);
//     }
//     let match = symbol.exec(string);

//     while (match != null) {
//       let elements = match[1].split("");
//       for (let action of elements) {
//         if (action == "*") {
//           result *= 2;
//         } else {
//           result /= 2;
//         }
//       }
//       match = symbol.exec(string);
//     }
//      return result.toFixed(2)
//   }
// }

// solve("M3ph-0.5s-0.5t0.0**");
// console.log("------------------------");
// solve("M3ph1st0**, Azazel");
// console.log("------------------------");
// solve("Gos/ho");

//==============================================================

function solve(input) {
    let patternSplit = /[, ]+/g;
    let splitedArr = input.split(patternSplit)
    let patternHealth = /[^\d+\-*\/\.]/g
    let patternDamage = /([+|-]?\d+(?:\.\d+)?)/g

    let resultObj = {}
}

solve("M3ph-0.5s-0.5t0.0**");
console.log("------------------------");
solve("M3ph1st0**, Azazel");
console.log("------------------------");
solve("Gos/ho");
