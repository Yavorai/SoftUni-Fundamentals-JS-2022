function demo(input) {
  let racers = input[0].split(", ");
  
  let racerInfo = {};
  for (let data of input.slice(1)) {
    let nameMatch = data.match(/[A-Za-z]+/g);
    let name = nameMatch.join("");
    if (nameMatch && racers.includes(name)) {
      let distanceMatch = data.match(/[\d]/g);
      let distance = calculateDistance(distanceMatch);
      if(!racerInfo[name]){
          racerInfo[name] = 0
      }
      racerInfo[name] += distance
    }
  }

  function calculateDistance(arr) {
    // arr е object
    let totalDistance = 0;
    //   for(let digit of arr){
    //       totalDistance += Number(digit)
    //   }
    if(arr === null) {return totalDistance}
    arr.forEach((digit) => (totalDistance += Number(digit)));
    return totalDistance;
  }

  let topThreeRacers = Object.keys(racerInfo)
  .sort((racerOne, racerTwo) => racerInfo[racerTwo] - racerInfo[racerOne])
  .slice(0,3)

  for(let index in topThreeRacers){
      switch(index){
          case "0": console.log(`1st place: ${topThreeRacers[index]}`); break;
          case "1": console.log(`2nd place: ${topThreeRacers[index]}`); break;
          case "2": console.log(`3rd place: ${topThreeRacers[index]}`); break;
      }
  }
  // ако не се ползват групи - MATCH
  // ако се групира - EXEC

}
demo([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
