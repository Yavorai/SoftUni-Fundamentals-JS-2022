// function demo(text) {
//     let result = []
//     let currentWord = ""

//     let lower = text.toLocaleLowerCase()

//     for(let i = 0; i < text.length; i++){
//         if(text[i] != lower[i]){
//             if(currentWord.length > 0){
//                 result.push(currentWord)
//             }
//             currentWord = text[i]
//         }else{
//             currentWord += text[i]
//         }
//     }
//     if(currentWord.length > 0){
//         result.push(currentWord)
//     }
//     console.log(result.join(", "));
// }
// demo("SplitMeIfYouCanHaHaYouCantOrYouCan");
// console.log("-------------");
// demo("HoldTheDoor");
// console.log("-------------");
// demo("ThisIsSoAnnoyingToDo");

//======================

// function demo(text) {
//         let result = []
//         let lastIndex = 0
//         let lower = text.toLocaleLowerCase()

//         for(let i = 0; i < text.length; i++){
//             if(text[i] !== lower[i]){
//                 let word = text.substring(lastIndex,i)
//                 lastIndex = i
//                 if(word.length > 0){
//                     result.push(word)
//                 }
//             }
//         }
//         let word = text.substring(lastIndex)
//         if(word.length > 0){
//             result.push(word)
//         }
//         console.log(result.join(", "));
// }
// demo("SplitMeIfYouCanHaHaYouCantOrYouCan");
// console.log("-------------");
// demo("HoldTheDoor");
// console.log("-------------");
// demo("ThisIsSoAnnoyingToDo");

//======================

function demo(text) {
  let result = text[0];

  let lower = text.toLocaleLowerCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i] !== lower[i]) {
      result += ", ";
    }
    result += text[i];
  }
  console.log(result);
}

demo("SplitMeIfYouCanHaHaYouCantOrYouCan");
console.log("-------------");
demo("HoldTheDoor");
console.log("-------------");
demo("ThisIsSoAnnoyingToDo");
