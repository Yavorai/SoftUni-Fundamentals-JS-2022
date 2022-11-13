// function demo(input) {
//     let password = input.shift();
//     let commandParser = {
//         "TakeOdd": (password) => {
//             return [...password]
//             .filter((symbol, index) => index % 2 !== 0)
//             .join("")

//         },
//         "Cut": (password, index, length) => {
//             index = Number(index)
//             length = Number(length)
//             const substring = password.substr(index, length)
//             return password.replace(substring, "")
//         },
//         "Substitute": (password, substring, substitute) => {
//             if (password.includes(substring)) {
//                 return password.replace(new RegExp(substring, "g"), substitute)
//             }
//             console.log("Nothing ot replace!");
//             return password
//         },
//     };
//     input.forEach(line => {
//         if (line !== "Done") {
//             let [command, ...tokens] = line.split(" ");
//             let oldPassword = password
//             password = commandParser[command](password, ...tokens);
//             if (oldPassword !== password) {
//                 console.log(password);
//             }
//         }
//     })

//     console.log(`Your password is: ${password}`);
// }
// demo([
//     "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done",
// ]);
// demo([
//     "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//     "TakeOdd",
//     "Cut 18 2",
//     "Substitute ! ***",
//     "Substitute ? .!.",
//     "Done",
// ]);

//====================================================================

// function demo(input) {
//     let password = input.shift();
//     let objArr = {
//         TakeOdd: (password) => {
//             return [...password].filter((_, index) => index % 2 !== 0).join("");
//         },
//         Cut: (password, index, length) => {
//             index = Number(index)
//             length = Number(length)
//                 //let howLong = password.length
//             let substringg = password.substr(index, length)
//             return password.replace(substringg, "")
//         },
//         Substitute: (password, substring, substitute) => {
//             if (password.includes(substring)) {
//                 return password.replace(new RegExp(substring, "g"), substitute) // или с while loop докато замени всички
//             } else {
//                 console.log(`Nothing to replace!`);
//                 return password
//             }
//         },
//     };
//     input.forEach((line) => {
//         if (line !== "Done") {
//             let [command, ...tokens] = line.split(" ");
//             let oldPass = password;
//             password = objArr[command](password, ...tokens); // като параметри

//             if (oldPass !== password) {
//                 console.log(password);

//             }
//         }
//     });
//     console.log(`Your password is: ${password}`);
// }
// demo([
//     "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done",
// ]);

// s WHILE ==============================
function demo(input) {
    let text = input.shift();
    while (input[0] !== "Done") {
        let [action, command1, command2] = input[0].split(" ");

        if (action === "TakeOdd") {
            let newText = "";
            for (let i = 0; i < text.length; i++) {
                if (i % 2 !== 0) {
                    let ch = text[i];
                    newText += ch;
                }
            }
            text = newText;
            console.log(text);
        } else if (action === "Cut") {
            let startIndex = Number(command1);
            let length = Number(command2);
            let endIndex = startIndex + length;

            let firstPart = text.slice(0, startIndex);
            let secondPart = text.slice(endIndex);
            text = firstPart + secondPart;
            console.log(text);
        } else if (action === "Substitute") {
            let substring = command1;
            let substitution = command2;
            if (text.includes(substring)) {
                while (text.includes(substring)) {
                    text = text.replace(substring, substitution);
                }
                console.log(text);
            } else {
                console.log("Nothing to replace!");
            }
        }

        input.shift();
    }
    console.log(`Your password is: ${text}`);
}
demo([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done",
]);


// =============   s FOR 

function asd(input) {
    input.pop();
    let pasword = input.shift();
    let oddChar = [];
    let result = "";
    for (let elemenet of input) {
        let [command, indexOrReplace, symbolToReplace] = elemenet.split(` `);

        if (command === "TakeOdd") {
            for (let i = 0; i < pasword.length; i++) {
                if (i % 2 !== 0) {
                    oddChar.push(pasword[i]);
                }
            }
            pasword = oddChar.join(``);
            oddChar = [];
            console.log(pasword);
        } else if (command === "Cut") {
            oddChar = pasword.split("");
            oddChar.splice(indexOrReplace, symbolToReplace);
            pasword = oddChar.join(``);
            oddChar = [];
            console.log(pasword);
        } else if (command === "Substitute") {
            if (!pasword.includes(indexOrReplace)) {
                console.log(`Nothing to replace!`);
            } else {
                while (pasword.includes(indexOrReplace)) {
                    pasword = pasword.replace(indexOrReplace, symbolToReplace);
                }
                console.log(pasword);
            }
        }
    }

    console.log(`Your password is: ${pasword}`);
}
asd([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",

    "Substitute ! ***",
    "Substitute ? .!.",
    "Done",
]);