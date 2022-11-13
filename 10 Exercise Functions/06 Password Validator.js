function demo(input){

    function isLengthBetweenSixAndTen (str) {
        if(str.length >= 6 && str.length <= 10){
            return true
        }else{
            return false
        }
    }

    function isConsistOnlyLettersAndDigit (str) {
        for(let char of str){
            let charCode = char.charCodeAt(0)
            if(!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)){
                return false
            }
        }
        return true;
    }

    function hasAtLeastTwoDigits (str){
        let counter = 0
        for(let char of str){
            let charCode = char.charCodeAt(0)

            if(charCode >= 48 && charCode <= 57){
                counter++
            }
        }
        // или return counter >= 2
        if(counter >= 2){
            return true
        }else{
            return false
        }
    }

    let isLengthValid = isLengthBetweenSixAndTen(input)
    let containLettersAndDigits = isConsistOnlyLettersAndDigit(input)
    let containsAtLeastTwoDigits = hasAtLeastTwoDigits(input)

    if(isLengthValid && containLettersAndDigits && containsAtLeastTwoDigits){
        console.log("Password is valid");
        
    }
    if(!isLengthValid){
        console.log('Password must be between 6 and 10 characters');
    }
    if(!containLettersAndDigits){
        console.log("Password must consist only of letters and digits");
    }
    if(!containsAtLeastTwoDigits){
        console.log('Password must have at least 2 digits');
    }
}
demo('logIn')
console.log("------------");
demo('MyPass123')
console.log("------------");
demo('Pa$s$s')

//================================


// function passwordValidator(pass) {

//     function checkLength(password) {
//       return password.length >= 6 && password.length <= 10 ? true : `Password must be between 6 and 10 characters`;
//     }
  
//     function checkValidChar(password) {
//       let isValidChar = false;
  
//       for (const char of password) {
//         let code = char.charCodeAt();
//         if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//           isValidChar = true;
//         } else {
//           isValidChar = false;
//           break;
//         }
//       }
//       return isValidChar ? true : `Password must consist only of letters and digits`;
//     }
  
//     function checkValidNum(password) {
//       let count = 0;
//       let isValidNum = false;
  
//       for (const char of password) {
//         let digit = char.charCodeAt();
//         if (digit >= 48 && digit <= 57) {
//           count++;
//         }
//         if (count >= 2) {
//           isValidNum = true;        
//         }
//       }
//       return isValidNum ? true : `Password must have at least 2 digits`;
//     }
    
//     if (checkLength(pass) === true && checkValidChar(pass) ===true && checkValidNum(pass) === true) {
//       return `Password is valid`;
//     } 
//     let result = [];
//     if (checkLength(pass) != true) {
//       result.push(checkLength(pass));
//     }
//     if (checkValidChar(pass)!= true) {
//       result.push(checkValidChar(pass));
//     }
//     if (checkValidNum(pass)!=true) {
//       result.push(checkValidNum(pass));
//     }
//     return result.join("\n");
//   }
//   console.log(passwordValidator("login"));
//   console.log(passwordValidator("Pa$s$s"));
//   console.log(passwordValidator("MyPass123"));

//   //===============================

//   function passwordValidator(pass) {
//     let password = pass;
//     let isValidLength = false;
//     let isValidChar = false;
//     let isValidNum = false;
//     let result = "";
  
//     if (password.length >= 6 && password.length <= 10) {
//       isValidLength = true;
//     } else {
//       result+= `Password must be between 6 and 10 characters` + `\n`
//     }
  
//     for (const char of password) {
//       let code = char.charCodeAt();
//       if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//         isValidChar = true;
//       } else {
//         isValidChar = false;
//         result += `Password must consist only of letters and digits` + `\n`
//         break;
//       }
//     }
     
//     let count = 0;
//     for (const char of password) {
//       let digit = char.charCodeAt();
//       if (digit >=48 && digit <=57){
//         count++;
//       }
//       if (count >=2) {
//         isValidNum = true;
//         break;
//       }
//     }
//     if (isValidNum != true) {
//       result += `Password must have at least 2 digits`
//     } 
  
//     if (isValidLength && isValidChar && isValidNum) {
//       return `Password is valid`;
//     } else {
//       return result;
//     }
  
//   }
//   console.log(passwordValidator("login"));
//   console.log(passwordValidator("Pa$s$s"));
//   console.log(passwordValidator("MyPass123"));