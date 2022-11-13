function demo(fr,sec) {

    let min = fr.charCodeAt(0)
    let max = sec.charCodeAt(0)

    let frAsNum = min
    let secAsNum = max

    if(frAsNum > secAsNum){
        min = secAsNum
        max = frAsNum
    }

    let result = ""

    for(let i = min + 1; i < max; i++){
        let toChar = String.fromCharCode(i)
        result += toChar + " "
    }

 return result
}
let result = demo("a", "d");
console.log(result);
demo("#", ":");
demo("C", "#");
