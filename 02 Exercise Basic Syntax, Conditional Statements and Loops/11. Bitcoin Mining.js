// function bitcoinMining(arr) {
//     let bitcoinPrice = 11949.16;
//     let goldPrice = 67.51;
//     let money = 0;
//     let bitcoin = 0;
//     let firstDay = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let shift = arr[i];
//         money += shift * goldPrice;
//         if (money >= bitcoinPrice) {
//             let times = Math.floor(money / bitcoinPrice);
//             if (firstDay === 0) {firstDay = i+1}
//             for (let k = 0; k < times; k++) {
//                 bitcoin++;
//                 money -= bitcoinPrice
//             }
//         }
//     }
// }
// bitcoinMining([100, 200, 300]);
// console.log("==================");
// bitcoinMining([50, 100])
// console.log("==================");
// bitcoinMining([3124.15, 504.212, 2511.124])

//==============================================

// function bitcoinMining(minedGold) {
//     let boughtBitcoin = 0;
//     let days = 0;
//     let money = 0;
//     let firstDay = 0;
//     for (let i = 0; i < minedGold.length; i++) {
//       days++;
//       let gold = minedGold[i];
//       if (days % 3 === 0) {
//         money += (gold - gold * 0.3) * 67.51;
//       } else {
//         money += gold * 67.51;
//       }
//       while (money >= 11949.16) {
//         if (firstDay === 0) {
//           firstDay = days;
//         }
//         money -= 11949.16;
//         boughtBitcoin++;
//       }
//     }
//     console.log(`Bought bitcoins: ${boughtBitcoin}`);
//     if (boughtBitcoin >= 1) {
//       console.log(`Day of the first purchased bitcoin: ${firstDay}`);
//     }
//     console.log(`Left money: ${money.toFixed(2)} lv.`);
//   }
// bitcoinMining([100, 200, 300]);
// console.log("==================");
// bitcoinMining([50, 100])
// console.log("==================");
// bitcoinMining([3124.15, 504.212, 2511.124])

//==============================================

function bitcoinMining(minedGold) {
  let boughtBitcoin = 0;
  let days = 0;
  let money = 0;
  let firstDay = 0;


  let oneGramOfGoldPrice = 67.51;
  let oneBitcoinPrice = 11949.16;

  for (let i = 0; i < minedGold.length; i++) {
    days++;
    let gold = minedGold[i];

    if (days % 3 === 0) {
      money += (gold - gold * 0.3) * oneGramOfGoldPrice;
    } else {
      money += gold * oneGramOfGoldPrice;
    }

    while (money >= oneBitcoinPrice) {
      if (firstDay === 0) {
        firstDay = days;
      }
      money -= oneBitcoinPrice;
      boughtBitcoin++;
    }
  }
  console.log(`Bought bitcoins ${boughtBitcoin}`);
  if(boughtBitcoin >= 1){
    console.log(`the day of first is ${firstDay}`);
  }
  console.log(`left money ${money.toFixed(2)} lv`);
}
bitcoinMining([100, 200, 300]);
// console.log("==================");
// bitcoinMining([50, 100])
// console.log("==================");
// bitcoinMining([3124.15, 504.212, 2511.124])
