function demo(number) {
    let isPrime = true;

    if (number == 0) {
        console.log("false");
    } else if (number == 1) {
        console.log("false");
    } else if (number == 2) {
        console.log("true");
    } else if (number > 2) {
        for (let i = 2; i <= number; i++) {
            if (number % i === 0 && i !== number) {
                isPrime = false;
                break;
            }
        }
        if (!isPrime) {
            console.log("false");
        } else {
            console.log("true");
        }
    }
}