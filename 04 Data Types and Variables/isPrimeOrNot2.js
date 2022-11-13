function demo(number) {
    let digit = number;

    if (digit % digit === 0 && digit % 2 === 1) {
        console.log("true");
    } else if (digit === 1 || digit <= 0) {
        console.log("false");
    } else {
        console.log("false");
    }
}