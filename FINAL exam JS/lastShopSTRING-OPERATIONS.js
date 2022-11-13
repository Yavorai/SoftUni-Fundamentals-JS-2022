function lastStop(inputArr) {
    let numbers = inputArr.shift().split(" ")
    let commandArr = inputArr

    console.log(`Original: ${numbers.join(' ')}`)
    for(let i of commandArr){
        let line = i.split(" ")
        let command = line.shift()
        let [toChange, replacer] = line
        let index = -1
        
        if(command === "Change"){
            index = numbers.indexOf(toChange)
            if(index !== -1){
                numbers.splice(index, 1, replacer)
                console.log(`Change: ${numbers.join(' ')}`)
            }


        }else if(command === "Hide"){
            index = numbers.indexOf(toChange)
            if(index !== -1){
                numbers.splice(index, 1)
                console.log(`Hide: ${numbers.join(' ')}`)
            }


        }else if(command === "Switch"){
            index = numbers.indexOf(toChange)
            let secondIndex = numbers.indexOf(replacer)
            let n = replacer

            if(index !== -1 && secondIndex !== -1){
                numbers.splice(secondIndex, 1, toChange)
                numbers.splice(index, 1, n)
                console.log(`Switch: ${numbers.join(' ')}`)
            }


        }else if(command === "Insert"){
            if(0 <= toChange && toChange < numbers.length){
                index = Number(toChange) + 1
                numbers.splice(index, 0, replacer)
                console.log(`Insert: ${numbers.join(' ')}`)
            }


        }else if(command === "Reverse"){
            numbers.reverse()
            console.log(`Reverse: ${numbers.join(' ')}`)
        }
    }


    console.log(`Final: ${numbers.join(' ')}`)
}
lastStop(['115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse',
    'Change 73 70',
    'Insert 10 85',
    'END'])