function demo(arr) {
    let operands = []
    let operator = ""
    let error = false

    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === "number"){
            operands.push(arr[i])
        }else{
            operator = arr[i]

            if(operands.length >= 2){
                let length = operands.length
                let result;

                if(operator == "+"){
                    result = operands[length-2] + operands[length -1]
                }else if(operator == "-"){
                    result = operands[length-2] - operands[length -1]
                }else if(operator == "*"){
                    result = operands[length-2] * operands[length -1]
                }else {
                    result = operands[length-2] / operands[length -1]
                }

                operands.splice(operands.length-2, 2)// removing last two numbers
                operands.push(result)
            }else{
              i = arr.length // stop the loop
              console.log("Error: not enough operands!");
              error = true
            }
        }
    }
    if (operands.length == 1 && error == false){
      console.log(operands[0]);
  } else if (operands.length > 1){
      console.log("Error: too many operands!");
  }
}
demo([3, 4, "+"]);
demo([5, 3, 4, "*", "-"]);
demo([7, 33, 8, "-"]);
demo([31, 2, "+", 11, "/"]);
demo([15, "/"]);

//==========================================

function jansNotation(arr) {
  let operands = [];
  let operator = "";
  let error = false;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      operands.push(arr[i]);
    } else {
      //we have received an operator
      operator = arr[i];

      if (operands.length >= 2) {
        let length = operands.length;
        let result;

        if (operator == "+") {
          result = operands[length - 2] + operands[length - 1];
        } else if (operator == "-") {
          result = operands[length - 2] - operands[length - 1];
        } else if (operator == "*") {
          result = operands[length - 2] * operands[length - 1];
        } else {
          // delete
          result = operands[length - 2] / operands[length - 1];
        }

        operands.splice(operands.length - 2, 2); //removing last two numbers
        operands.push(result);
      } else {
        i = arr.length; //stop the loop
        console.log("Error: not enough operands!");
        error = true;
      }
    }
  }

  if (operands.length == 1 && error == false) {
    console.log(operands[0]);
  } else if (operands.length > 1) {
    console.log("Error: too many operands!");
  }
}
jansNotation([3, 4, "+"]);
jansNotation([5, 3, 4, "*", "-"]);
jansNotation([7, 33, 8, "-"]);
jansNotation([31, 2, "+", 11, "/"]);
jansNotation([15, "/"]);
