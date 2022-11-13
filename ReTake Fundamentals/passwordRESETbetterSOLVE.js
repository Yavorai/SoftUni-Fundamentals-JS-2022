function demo(input) {
    let password = input.shift();

    let commandParser = {
        "TakeOdd": (password)
    }
  
    input.forEach((line) => {
      if (line !== "Done") {
        let [command, ...tokens] = line.split(" ");
        if (command == "TakeOdd") {
          password = [...password].filter((symbol, index) => index % 2 !== 0).join("");
          console.log(password);
        } else if (command == "Cut") {
          let index = Number(tokens[0]);
          let length = Number(tokens[1]);
  
          // password.substring(index, length) така правят едно и също
          let substring = password.substring(index, index + length);
          password = password.replace(substring, "");
          console.log(password);
        } else if (command == "Substitute") {
          let [substring, substitute] = tokens;
          if (password.includes(substring)) {
            password = password.replace(
              new RegExp(`${substring}`, "g"),
              substitute
            );
            console.log(password);
          } else {
            console.log("Nothing to replace!");
          }
        }
      }
    });
    console.log(`Your password is: ${password}`);
  }
  demo([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done",
  ]);
  console.log("====================");
  demo([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done",
  ]);