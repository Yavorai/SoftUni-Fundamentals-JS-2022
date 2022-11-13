function demo(fr,sec,th) {

    function sum (fr, sec){
        let result = fr + sec
        return result
    }
    function minus (fr, sec){
        let result = fr - sec
        return result
    }

    let numSum = sum(fr,sec) 
    let result = minus(numSum, th)
    return result
}
let result =  demo(1, 17, 30);
console.log(result);
// demo(1, 17, 30);
// demo(42, 58, 100);
