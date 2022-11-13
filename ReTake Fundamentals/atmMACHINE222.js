function demo(input) {
  let totalCashInATM = 0;
  let notes = {
    1000: 0,
    500: 0,
    200: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  };

  input.forEach((element) => {
    if (element.length > 2) {
      insertMoney(element);
    } else if (element.length === 2) {
      withdrawMoney(element);
    } else if (element.length === 1) {
      makeReport(element);
    }
  });

  function totalCash(notes) {
    let totalCash = 0;
    for (let note in notes) {
      note = Number(note);
      totalCash += +notes[note] * note;
    }
    return totalCash;
  }

  function insertMoney(array) {
    let arr = array.filter((x) => x > 0);
    let insertedCash = 0;
    arr.forEach((note) => {
      insertedCash += +note;
      notes[note] = Number(notes[note]) + 1;
    });
    totalCashInATM = totalCash(notes);
    console.log(
      `Service Report: ${insertedCash}$ inserted. Current balance: ${totalCashInATM}$.`
    );
  }

  function withdrawMoney(arr) {
    let accountBalance = +arr[0];
    let withdraw = +arr[1];
    let moneyToWithdraw = +arr[1];
    totalCashInATM = totalCash(notes);

    if (accountBalance < moneyToWithdraw) {
      console.log(
        `Not enough money in your account. Account balance: ${accountBalance}$.`
      );
    } else if (totalCashInATM < moneyToWithdraw) {
      console.log("ATM machine is out of order!");
    } else {
      let sortedNotes = Object.entries(notes)
        .sort((a, b) => b[0] - a[0])
        .filter((x) => x[1]);
      sortedNotes.forEach((el) => {
        let banknote = +el[0];
        if (banknote <= moneyToWithdraw) {
          let banknoteCount = Math.floor(moneyToWithdraw / banknote);
          moneyToWithdraw %= banknote;
          notes[banknote] -= banknoteCount;
        }
      });
      if (moneyToWithdraw === 0) {
        accountBalance -= withdraw;
        console.log(
          `You get ${withdraw}$. Account balance: ${accountBalance}$. Thank you!`
        );
      }
    }
  }

  function makeReport(arr){
      let banknote = arr[0];
      console.log(
        `Service Report: Banknotes from ${banknote}$: ${notes[banknote]}.`
      );
  }
}
demo([
  [20, 5, 100, 20, 1],
  [457, 25],
  [1],
  [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
  [20, 85],
  [5000, 4500],
]);
