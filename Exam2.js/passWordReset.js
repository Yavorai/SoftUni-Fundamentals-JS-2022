function demo(input) {
  let password = input.shift();
  input.forEach((line) => {
    if (line !== "Done") {
      let [command, ...tokens] = line.split(" "); // сплит работи ис регекси
      if (command === "TakeOdd") {
        password = [...password] // превръща в масив символ по символ
          .filter((symbol, index) => index % 2 !== 0) // трябват само нечетните ВТОРИЯТ ПАРАМЕТЪР НА ФИЛТЪР Е ИНДЕКС
          .join("");
          console.log(password);
        } else if (command === "Cut") {
            let index = Number(tokens[0]);
            let length = Number(tokens[1]);
            let substring = password.substring(index, index + length);
            password = password.replace(substring, ""); // заменя само първия срещнат
            console.log(password);
      } else if (command === "Substitute") {
          let [substring, substitute] = tokens
          if(password.includes(substring)){
              password = password.replace(new RegExp(`${substring}`, "g"), substitute)
              console.log(password);
          }else{
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
console.log("-----------------");
demo([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);

//===========================================================

function demo(input) {
    let password = input.shift();

    let commandParser = {
        "TakeOdd": (password) => {
            return [...password]
            .filter((symbol, index) => index % 2 !== 0) 
            .join("");
        },
        "Cut": (password,index,length) => {
            index = Number(index)
            length = Number(length)

            let substring = password.substring(index, index + length);
              return password.replace(substring, "");
        },
        "Substitute": (password,substring, substitute) => {
            if(password.includes(substring)){
                return password.replace(new RegExp(`${substring}`, "g"), substitute)
            }
            return password
        }
    }

    input.forEach((line) => {
      if (line !== "Done") {
        let [command, ...tokens] = line.split(" "); // сплит работи ис регекси
        let oldPassword = password
        password = commandParser[command](password,...tokens)

        if(oldPassword !== password){
            console.log(password);
        }else{
            console.log("Nothing to replace!");
        }
      }
    })
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
  console.log("-----------------");
  demo([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done",
  ]);
  