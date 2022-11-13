function demo(arr){
    let value = 0

    for(let i = 0; i < arr.length; i ++){
        let command = arr[i]

        if(command === "soap"){
            value += 10
        }else if(command === "water"){
            value += value* 0.2
        }else if (command === "vacuum cleaner"){
            value += value * 0.25
        }else{
            value -= value * 0.1
            if(value < 0){
                value = 0
            }
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
demo(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])