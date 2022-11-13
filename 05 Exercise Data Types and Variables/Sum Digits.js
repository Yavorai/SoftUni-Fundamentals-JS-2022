function demo(num){
    let numToStr = num.toString()
    let sum = 0
    for(let digit of numToStr){
        sum += Number(digit)
    }
    console.log(sum);
}
demo(245678)