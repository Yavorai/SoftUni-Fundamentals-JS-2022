function demo(number){
    let sum = 0
    for(let i = 1; i < number; i++){
        if(number % i === 0){
            sum += i
        }
    }
    if(sum === number){
        return `We have a perfect number!`
    }else{
        return `It's not so perfect.`
    }
}
console.log(demo(6));
console.log(demo(28));
console.log(demo(1236498));

//======================

function perfectNumber(n) {

    let divisorsSum = 0;
  
    for (let i = 0; i < n; i++) {
      if (n % i === 0) {
        divisorsSum += i;
      }
    }
  
    if (divisorsSum === n) {
      console.log(`We have a perfect number!`);
    } else {
      console.log("It's not so perfect.");
    }
  }
  perfectNumber(6)
  perfectNumber(28)
  perfectNumber(1236498)


