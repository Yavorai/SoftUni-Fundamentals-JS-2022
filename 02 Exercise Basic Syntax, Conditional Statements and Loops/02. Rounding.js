function demo(num,limiter){
    if(limiter > 15){
        limiter = 15
    }
    const rounded = num.toFixed(limiter)
    const withOutZeroes = parseFloat(rounded)
    console.log(withOutZeroes)
   // console.log(parseFloat(num.toFixed(limiter)))
}
demo(3.1415926535897932384626433832795,29)
demo(10.5,30)