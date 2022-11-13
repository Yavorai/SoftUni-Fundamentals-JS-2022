function demo(input) {
  let towns = {};
  let lineSail = input.shift();
  while (lineSail !== "Sail") {
    let [town, param1, param2] = lineSail.split("||");
    let pop = Number(param1);
    let gold = Number(param2);

    if (!towns.hasOwnProperty(town)) {
      towns[town] = { pop: 0, gold: 0 };
    }
    towns[town].pop += pop;
    towns[town].gold += gold;
    lineSail = input.shift();
  }
  let lineEnd = input.shift();
  while (lineEnd !== "End") {
    let [command, town, param1, param2] = lineEnd.split("=>");

    if (command === "Plunder") {
      let pop = Number(param1);
      let gold = Number(param2);

      towns[town].pop -= pop;
      towns[town].gold -= gold;
      console.log(
        `${town} plundered! ${gold} gold stolen, ${pop} citizens killed.`
      );

      if (towns[town].pop <= 0 || towns[town].gold <= 0) {
        delete towns[town];
        console.log(`${town} has been wiped off the map!`);
      }
    } else if (command === "Prosper") {
      let gold = Number(param1);

      if (gold < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        towns[town].gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${town} now has ${towns[town].gold} gold.`
        );
      }
    }
    lineEnd = input.shift();
  }

  let sorted = Object.entries(towns).sort(sortedTowns);

  function sortedTowns(a, b) {
    let [townNameA, thingsA] = a;
    let [townNameB, thingsB] = b;
    return thingsB.gold - thingsA.gold || townNameA.localeCompare(townNameB);
  }
  if (sorted.length > 0) {
    console.log(
      `Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`
    );
    for (let town of sorted) {
      console.log(
        `${town[0]} -> population: ${town[1].pop} citizens, Gold: ${town[1].gold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }
}
demo([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
