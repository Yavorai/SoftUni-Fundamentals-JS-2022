function arrayModifier(arr){
    let myArray = arr.shift().split(' ').map(Number);
    
    for(let i = 0; i < arr.length-1; i++){
        let command = arr[i].split(' ');
        if(command[0] === 'swap'){
            let index1 = Number(command[1]);
            let index2 = Number(command[2]);
            let temp = myArray[index1];
            myArray[index1] = myArray[index2];
            myArray[index2] = temp;
        }else if(command[0] === 'multiply'){
            let index1 = Number(command[1]);
            let index2 = Number(command[2]);
            let temp = myArray[index2];
            myArray[index1] *= temp;
        }else if(command[0] === 'decrease'){
            for(let i = 0; i < myArray.length; i++){
                myArray[i]--;
            }
        }
    }
    console.log(myArray.join(', '));
}