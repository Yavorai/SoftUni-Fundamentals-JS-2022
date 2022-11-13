function demo(arr){

    for( let number of arr){
        let numberAsString = number.toString()

        let reversed = numberAsString.split("").reverse().join("")

        if(numberAsString === reversed){
            console.log("true");
        }else{
            console.log("false");
        }
    }


}
demo([123,323,421,121])
console.log("---------");
demo([32,2,232,1010])