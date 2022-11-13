function demo(input){
    let array = input
    
    let step = Number(array[array.length - 1])
    let newArr = []
    for(let i = 0; i < array.length -1; i += step){
        newArr.push(array[i])
    }
    console.log(newArr.join(" "));
}
demo(['5', '20', '31', '4', '20', '2']);