let arr = ['z', 's', 'a', 'd'];
console.log(arr.sort((a, b) => b.localeCompare(a))); // from Z-A
console.log(Number("string")); // NaN

let a = 5;
let b = a++;
let c = ++a;
console.log(c);
console.log(Number(true)); // 1

let greet = 'Hello World';
console.log(greet.substring(3, 5)); // 3 to 5 'lo'

let fistName = 'George';
console.log(fistName.charAt(2)); // 'o'

// don't try to make smart solutions on exam, just make them work

function usernameProblem01(input = []) {
    let username = input.shift();
    let registrationInd = input.indexOf('Registration');
    let commands = input.slice(0, registrationInd);
    let output = [];

    // let command = data[0];
    // let item = data[1];

    // make variables inside the function with different name than global ones
    let obj = {
        'Letters': function (user, par1) {
            // let tempUser = username;
            if (par1 === 'Lower') {
                // now I know why need to be different variable
                    // inside the function and outside

                // where is user it was username like the global variable
                // and when I change it inside the function
                // it not change itself out of the function,
                // because is like different variables with the same name
                username = user.toLowerCase();
                // username = username.toLowerCase();
            } else if ((par1 === 'Upper')) {
                username = user.toUpperCase();
            }
            output.push(username);
        },
        'Reverse': function (username, par1, par2) {
            let tempUser = username;
            let startInd = par1;
            let endInd = par2;

            let isValidInd = (startInd < endInd) &&
                (startInd >= 0 && startInd < tempUser.length - 1) &&
                (endInd > 0 && endInd < tempUser.length);

            if (isValidInd) {
                output.push(tempUser.substring(startInd, ++endInd)
                    .split('').reverse().join(''));
            }
        },
        'Substring': function (username, par1) {
            let substring = par1;
            // let tempUser = username;
            if (username.includes(substring)) {
                output.push(username.replace(substring, ''));
            } else {
                output.push(`The username ${username} doesn't contain ${substring}.`);
            }
        },
        'Replace': function (user, par1) {
            let ch = par1;
            username = user.replace(ch, '-');
            output.push(username);
        },
        'IsValid': function (username, par1) {
            let ch = par1;
            // let tempUser = username;

           if (username.includes(ch)) {
               output.push('Valid username.');
           } else {
               output.push(`${ch} must be contained in your username.`);
           }
        },
    }

    for (const line of commands) {
        let [command, par1, par2] = line.split(' ');
        obj[command](username, par1, par2);
    }

    return output.join('\n');
}

console.log(
    usernameProblem01(
        [
            "John",
            "Letters Lower",
            "Substring SA",
            "IsValid @",
            "Registration"
        ]
    )
);

console.log(
    usernameProblem01(
        [
            "ThisIsSoftUni",
            "Reverse 1 3",
            "Replace S",
            "Substring hi",
            "Registration"
        ]
    )
);

  // list = obj[command](list, item);
    //     o	"Registration"
    // o	"Letters {Lower/Upper}"
    // o	"Reverse {startIndex} {endIndex}"
    // o	"Substring {substring}"
    // o	"Replace {char}"
    // o	"IsValid {char}"

    // OUTPUTS
    // •	The possible outputs are:
    // o	"The username {username} doesn't contain {substring}."
    // o	"Valid username."
    // o	"{char} must be contained in your username."