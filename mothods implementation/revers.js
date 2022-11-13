function demo(a, b, c) {
    let string = ` ${a} ${b} ${c}`;
    let stringLength = string.length - 1;
    let output = "";
    for (let i = stringLength; i >= 0; i--) {
        output += string[i];
    }
    console.log(output);
}
demo("A", "B", "C");