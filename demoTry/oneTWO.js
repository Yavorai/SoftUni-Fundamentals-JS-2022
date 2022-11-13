function demo(input) {
  let result = input.shift();

  while (input[0] != "Decode") {
    let tokens = input.shift().split("|");
    let command = tokens[0];

    if (command == "ChangeAll") {
      //result = result.split(tokens[1]).join(tokens[2])

      // или

      let pattern = new RegExp(tokens[1], "g");
      result = result.replace(pattern, tokens[2]);
      // трябва да се ескейпнат контролни символи
    } else if (command == "Move") {
      let index = Number(tokens[1]);
      let left = result.substring(0, index);
      let right = result.substring(index);

      result = right + left;
    } else if (command == "Insert") {
      let index = Number(tokens[1]);
      let left = result.substring(0, index);
      let right = result.substring(index);
      result = left + tokens[2] + right;
    }
  }
  console.log("The decrypted message is: " + result);
}
demo(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
demo(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
