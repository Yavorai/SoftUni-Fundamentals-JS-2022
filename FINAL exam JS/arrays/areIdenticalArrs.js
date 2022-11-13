function demo(firstArr, secondArr){
let areIdentical = true
let indexOfDiff = 0

for(let i = 0; i < firstArr.length; i++){
    let firstElement = firstArr[i]
    let secondElement = secondArr[i]

    if(firstElement !== secondElement){
        areIdentical = false
        indexOfDiff = i
        break
    }
}
if(areIdentical){
    let sum = 0
    for(let i = 0; i < firstArr.length; i++){
        sum += Number(firstArr[i])
    }
    console.log(`Are identical - Sum ${sum}`);
}else{
    console.log(`Not - diff at ${indexOfDiff} index`)
}
}
demo(["10","20","30"],["10","20","30"])
demo(["10","20","30","40"],["10","20","30","50"])