function demo(arr){
    let wagonsArr = arr.shift().split(" ").map((x) => Number(x))
    let maxCapacity = arr.shift()

    for(let line of arr){
        let tokens = line.split(" ")

        if(tokens[0] === "Add"){
            let passengers = Number(tokens[1])
            wagonsArr.push(passengers)
        }else{
            let passengers = Number(tokens[0])
            for(let i = 0; i< wagonsArr.length;i++){
                if(wagonsArr[i] + passengers <= maxCapacity){
                    wagonsArr[i] += passengers
                    break
                }
            }
        }
    }
    console.log(wagonsArr.join(" "));
}
demo(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])
console.log("-------------");
demo(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])