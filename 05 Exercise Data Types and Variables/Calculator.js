function demo(num1, operant, num2) {
    // let result;

    // if (operant === "+"){
    //    result = num1 + num2
    // }else if(operant === "-"){
    //     result = num1 - num2
    // }else if(operant === "*"){
    //     result = num1 * num2
    // }else if(operant === "/"){
    //     result = num1 / num2
    // }
    // console.log(result.toFixed(2));

    // решение е eval() работи със стрингове

   let result = eval(`${num1} ${operant} ${num2}`)
   console.log(result.toFixed(2));
}
demo(5, "+", 10);
demo(25.5, "-", 3);
