// function demo(numbers){

// // index + index + 1 - обаче при последният елемент ще излезе
//     let condensed = []
//     while (numbers.length > 1){
//         for(let index = 0; index < numbers.length -1; index++){
//             let currentEl = numbers[index]
//             let nextEl = numbers[index + 1]
//             condensed.push(currentEl + nextEl)
//         }
//         numbers = condensed // това намалява стъпката свива масива
//         condensed = []
//     }
//     console.log(numbers[0]);
// }
// demo([2,10,3])
// demo([5,0,4,1,2])
// ================================

function demo(numbers) {
  let count = numbers.length - 1;
  while (count >= 1) {
    for (let index = 0; index < count; index++) {
      let nextEl = numbers[index + 1];
      numbers[index] += nextEl;
    }
    count--;
  }
  console.log(numbers[0]);
}
demo([2, 10, 3]);
demo([5, 0, 4, 1, 2]);
