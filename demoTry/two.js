function demo(input) {
  let result = [];
  let points = 0;
  let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g;
  let match = pattern.exec(input);
  while (match != null) {
    result.push(match[2]);
    points += match[2].length

    match = pattern.exec(input);
  }
    console.log(`Destinations: ${result.join(", ")}`);
    console.log(`Travel Points: ${points}`);
}
demo("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
demo("ThisIs some InvalidInput");

//  /=([A-Z][A-Za-z]{2,})=|\/([A-Z][A-Za-z]{2,})\//g
//==================================

// function demo(input) {
//     let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g
//     let result = []
//     let points = 0
//         // while there is a match - store destination name - find next match
//         // calc travel points and  print result
//     let match = pattern.exec(input)
//     while (match != null) {
//         result.push(match[2])
//         points += match[2].length
//         match = pattern.exec(input)
//     }
//     console.log(`Destinations: ${result.join(", ")}`);
//     console.log(`Travel Points: ${points}`);
// }
