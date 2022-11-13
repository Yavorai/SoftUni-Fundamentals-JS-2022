function equalSums(arr) {

    let arrLength = arr.length;
    let sumLeft = 0;
    let sumRight = 0;
    let currentIndex = 0;
    let index = 0
    let isEqual = false;

    for (let i = 0; i < arrLength; i++) {
        if (arrLength === 1 || arrLength === 0) {
            console.log(0);
            break;
        }
        currentIndex = i;
        for (let j = 0; j < currentIndex; j++) {
            sumLeft += arr[j];
        }
        for (let r = currentIndex + 1; r < arrLength; r++) {
            sumRight += arr[r];
        }
        if (sumLeft === sumRight) {
            index = i;
            isEqual = true;
        }
        sumLeft = 0;
        sumRight = 0;
    }
    if (isEqual) {
        console.log(index)
    } else if (!isEqual && arrLength > 1) {
        console.log("no")
    }
}