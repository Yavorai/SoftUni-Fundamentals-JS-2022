// function demo(input){
//     let concealedMessage = input.shift()
//     let line = input.shift()
//     while (line !== "Reveal"){
//         let [command, param1, param2] = line.split(":|:")

//         if(command === "InsertSpace"){
//             let index = Number(param1)
//             let left = concealedMessage.substring(0,index)
//             let right = concealedMessage.substring(index);
//             concealedMessage = concealedMessage = left + " " + right
//             console.log(concealedMessage);
//         }else if(command === "Reverse"){
//             let substring = param1
//             if(concealedMessage.includes(substring)){
//                 let index = concealedMessage.indexOf(substring) // 8
//                 let howLong = substring.length
//                 let toReverse = concealedMessage.substring(index,index + howLong)
//                 toReverse = toReverse.split("").reverse().join("")
//                 concealedMessage = concealedMessage.replace(substring, toReverse)
//                 console.log(concealedMessage);
//             }else{
//                 console.log("error");

//             }
//         }else if(command === "ChangeAll"){
//             let substring = param1
//             let replacement = param2
//                 while(concealedMessage.includes(substring) !== false){
//                     concealedMessage = concealedMessage.replace(substring, replacement)
//                 }
//                 console.log(concealedMessage);
//         }
//         line = input.shift()
//     }
//     console.log(`You have a new text message: ${concealedMessage}`);
// }
// demo([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
//   ])
// console.log("---------------------------------");
//   demo([
//     'Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reverse:|:?uoy',
//     'Reverse:|:jd',
//     'InsertSpace:|:3',
//     'InsertSpace:|:7',
//     'Reveal'
//   ])

// denitsa solve

function demo(input) {
  let str = input.shift();

  for (let line of input) {

    if (line === "Reveal") {
      console.log(`You have a new text message: ${str}`);
      break;
    }

    let [command, a, b] = line.split(":|:");

    if (command === "InsertSpace") {
      str = str.substring(0, a) + " " + str.substring(a);
    } else if (command === "Reverse") {
      if (str.includes(a)) {
        let i = str.indexOf(a);
        let reversed = a.split("").reverse().join("");
        str = str.substring(0, i) + str.substring(i + a.length) + reversed;
      } else {
        console.log("error");
        continue;
      }
    } else if (command === "ChangeAll") {
      let i = str.indexOf(a);
      while (i !== -1) {
        str = str.substring(0, i) + b + str.substring(i+a.length);
        i = str.indexOf(a);
      }
    }
    console.log(str);
  }
}
demo([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
console.log("---------------------------------");
demo([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);

//====== 100 points
// console.log("----------------------------");

// function solve(arr) {
//     let message = arr.shift();
//     let command = arr.shift();
//     while (command != 'Reveal') {
//         let [action, firstArg, secondArg] = command.split(':|:');
//         switch (action) {
//             case 'InsertSpace':
//                 const index = Number(firstArg);
//                 message = message.slice(0, index) + ' ' + message.slice(index);
//                 console.log(message);
//                 break;
//             case 'Reverse':
//                 let substring = firstArg;
//                 if (message.includes(substring)) {
//                     message = message.replace(substring, '');
//                     substring = substring.split('').reverse().join('');
//                     message += substring;
//                     console.log(message);
//                 } else {
//                     console.log('error');
//                 }
//                 break;
//             case 'ChangeAll':
//                 const substring1 = firstArg;
//                 const replacement = secondArg;
//                 let index1 = message.indexOf(substring1);
//                 while (index1 > -1) {
//                     message = message.replace(substring1, replacement);
//                     index1 = message.indexOf(substring1, index1 + 1);
//                 }
//                 console.log(message);
//                 break;
//         }
//         command = arr.shift();
//     }
//     console.log(`You have a new text message: ${message}`);
// }
// solve([
//     "heVVodar!gniV",
//     "ChangeAll:|:V:|:l",
//     "Reverse:|:!gnil",
//     "InsertSpace:|:5",
//     "Reveal",
//   ]);
//   console.log("---------------------------------");
//   solve([
//     "Hiware?uiy",
//     "ChangeAll:|:i:|:o",
//     "Reverse:|:?uoy",
//     "Reverse:|:jd",
//     "InsertSpace:|:3",
//     "InsertSpace:|:7",
//     "Reveal",
//   ]);

//------------------------------------------

function solve(input){
    let message = input.shift();
    let isError = false;
 
    let command = input.shift();
    while(command !== 'Reveal'){
        let curCommand = command.split(":|:");
 
        switch(curCommand[0]){
            case 'InsertSpace' :
                message = insertSpaceCase(message, curCommand);
                break;
            case 'Reverse' :
                message = reverceCase(message, curCommand);
                break;
            case 'ChangeAll' :
                message = changeAllCase(message, curCommand);
                break;
        }
 
        if(!isError){
            console.log(message);
        }
        isError = false
        command = input.shift();
    }
 
    console.log(`You have a new text message: ${message}`);
 
    function insertSpaceCase(string, arr){
        let index = Number(arr[1]);
        let firstPart = string.substring(0,index);
        let secondPart = string.substring(index);
        return firstPart.concat(" " + secondPart);
    }
 
    function reverceCase(string, arr){
        let partOfMessage = arr[1];
        let revercedPart = partOfMessage.split("").reverse().join("");
 
        if(!string.includes(partOfMessage)){
            console.log('error');
            isError = true;
            return string;
        }
 
        string = string.replace(partOfMessage, "");
        return string.concat(revercedPart);
    }
 
    function changeAllCase(string, arr){
        let substring = arr[1];
        let replacement = arr[2];
        while(string.indexOf(substring) > 0){
            string = string.replace(substring, replacement);
        }
        return string;
    }
}
solve([
    "heVVodar!gniV",
    "ChangeAll:|:V:|:l",
    "Reverse:|:!gnil",
    "InsertSpace:|:5",
    "Reveal",
  ]);
  console.log("---------------------------------");
  solve([
    "Hiware?uiy",
    "ChangeAll:|:i:|:o",
    "Reverse:|:?uoy",
    "Reverse:|:jd",
    "InsertSpace:|:3",
    "InsertSpace:|:7",
    "Reveal",
  ]);
