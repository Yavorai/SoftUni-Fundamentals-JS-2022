function solve(input) {
  let maxMess = Number(input.shift());
  input.pop();
  let finalObj = {};

  for (let line of input) {
    line = line.split("=");
    let command = line[0];

    if (command === "Add") {
      let username = line[1];
      let sent = Number(line[2]);
      let received = Number(line[3]);

      if (!finalObj[username]) {
        finalObj[username] = {
          se: sent,
          rec: received,
          total: maxMess,
        };
      }
    } else if (command === "Message") {
      let sender = line[1];
      let receiver = line[2];

      if (finalObj[sender] && finalObj[receiver]) {
        finalObj[sender][se] += 1;
        finalObj[sender][rec] += 1;
      }
      if (finalObj[sender][se] && finalObj[sender][rec]) {
        if (
          finalObj[sender][se] + finalObj[sender][rec] >=
          finalObj[sender][total]
        ) {
          delete finalObj[sender];
          console.log(`${sender} reached the capacity!`);
          continue;
        }
        if (
          finalObj[receiver][rec] + finalObj[receiver][se] >=
          finalObj[sender][total]
        ) {
          delete finalObj[receiver];
          console.log(`${receiver} reached the capacity!`);
          continue;
        }
      }
    } else if (command === "Empty") {
      let username = line[1];
      if (finalObj[username]) {
        delete finalObj[username];
      } else if (username === "All") {
        finalObj = {};
      }
    }
  }
  let sorted = Object.entries(finalObj).sort(compare);
  // console.log(sorted); [ [ 'Bonnie', { se: 3, rec: 3, total: 12 } ] ]

  function compare(a, b) {
    let firstMan = a[0];
    let secondMan = b[0];
    let sendOne = a[1]["se"] + a[1]["rec"];
    let sendTwo = b[1]["se"] + b[1]["rec"];
    if (sendOne !== sendTwo) {
      return sendTwo;
    }
  }
  console.log(sorted);
}

// solve(["10",
//         "Message=Berg=Kevin",
//         "Add=Mark=5=4",
//         "Statistics"
//     ]);
//     console.log("-----------------");
solve([
  "12",
  "Add=Bonnie=3=5",
  "Add=Johny=4=4",
  "Empty=All",
  "Add=Bonnie=3=3",
  "Statistics",
]);
