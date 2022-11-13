function demo(arr) {
  let myArr = arr.shift().split(" ").map(Number); // [ 4, 19, 2, 53, 6, 43 ]

  for (let line of arr) {
    let [command, param1, param2] = line.split(" ");
    param1 = Number(param1);
    param2 = Number(param2);

    if (command === "Add") {
      myArr.push(param1);
    } else if (command === "Remove") {
      if (myArr.includes(param1)) {
        let index = myArr.indexOf(param1);
        myArr.splice(index, 1);
      }
    } else if (command === "RemoveAt") {
      myArr.splice(param1, 1);
    } else if (command === "Insert") {
      myArr.splice(param2, 0, param1);
    }
  }
  console.log(myArr.join(" "));
}
demo(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);
//==========================
function solve(commands) {
  let arr = commands.shift().split(" ").map(Number);
  for (let i = 0; i < commands.length; i++) {
    // въртим по броя на командите
    let [command, firstNum, secondNum] = commands[i].split(" "); // взимаме съответната команда, число и индекс. П.С. Първо бих взела само командата и само, когато тя е insert ще взимам secondNum(който реално е индекса)
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (command) {
      case "Add":
        add(firstNum); // подаваме параметър
        break;
      case "Remove":
        remove(firstNum); // подаваме параметър
        break;
      case "RemoveAt":
        removeAt(firstNum); //подаваме параметър
        break;
      case "Insert":
        insert(firstNum, secondNum); // подаваме параметри
        break;
    }
  }
  function add(el) {
    arr.push(el);
  }
  function remove(num) {
    arr = arr.filter((el) => el !== num);
  }
  function removeAt(index) {
    arr.splice(index, 1);
  }
  function insert(num, index) {
    arr.splice(index, 0, num);
  }
  console.log(arr.join(" "));
}
