function demo(number) {
  let oddSum = 0;
  let evenSum = 0;

  let numberAsString = number.toString()
    
  // for(let digit of numberAsString){
  //     if(Number(digit) % 2 ===0){
  //         evenSum += Number(digit)
  //     }else{
  //             oddSum += Number(digit)
  //     }
  // }
  for (let i = 0; i < numberAsString.length; i++) {
    let digit = Number(numberAsString[i]);
    //console.log(digit);
    if (digit % 2 === 0) {
      evenSum += digit
    } else {
      oddSum += digit
    }
  }
  let resultString = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
  return resultString;
}
//demo(1000435);
let result = demo(1000435)
console.log(result);
console.log("----------");
demo(3495892137259234);
