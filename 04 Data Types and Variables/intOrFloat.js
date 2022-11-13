function demo(a,b,c){
    let sum = a + b + c;
    let rounded = Math.round(sum)
    // или 
    // let remainder = sum % 1
    // if(remainder == 0){ // равен на нула за да е цяло число

    // }
    if(sum === rounded){
        console.log(`${sum} - Integer`); // знаем че числото е закръглено
    }else {
        console.log(`${sum} - Float`); // знаем че числото е закръглено

    }
}
demo(9, 100, 1.1)
demo(100, 200, 303)