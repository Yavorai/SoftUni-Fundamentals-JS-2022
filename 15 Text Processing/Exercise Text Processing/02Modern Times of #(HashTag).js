// function demo(text) {
//   let result = [];
//   let collecting = false;
//   let currentWord = "";
//   // iterate all chars
//   for (let char of text) {
//     if (collecting) {
//       if (char == " ") {
//         if (currentWord.length > 0) {
//           // if anything was collected, add to result
//           result.push(currentWord);
//         }
//         collecting = false; // спираме да събираме ако ударим интервал
//         currentWord = ""; // зануляваме я
//       } else {
//         let code = char.charCodeAt(0);
//         if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//           currentWord += char;
//         } else {
//           collecting = false;
//         }
//       }
//     } else {
//       // if char is # begin collecting letters, until non letter is found
//       if (char == "#") {
//         collecting = true;
//       }
//     }
//   }

//   if (collecting && currentWord.length > 0) {
//     result.push(currentWord);
//   }

//   for (let word of result) {
//     console.log(word);
//   }
// }
// demo("Nowadays everyone uses # to tag a #special word in #socialMedia");

function demo(text) {
  let tokens = text.split(" ");
  let result = [];

  for (let token of tokens) {
    if (token.length > 1 && token[0] == "#") {
      let valid = true;

      for (let char of token.substring(1)) {
        // от първи до края тоест да не хване хаштага
        let code = char.charCodeAt(0);
        if (code < 65 || code > 122 || (code >= 91 && code <= 96)) {
          valid = false;
          break; // случай ако не е валидно
        }
      }
      if (valid) {
        result.push(token.substring(1));
      }
    }
  }
  //console.log(result.join("\n"));
  for (let word of result) {
        console.log(word);
      }
}
demo("Nowadays everyone uses # to tag a #special word in #socialMedia");
