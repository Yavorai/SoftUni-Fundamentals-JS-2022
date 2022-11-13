function solve(input) {
    let mainObject = {};

    let line = input.shift();
    while (line !== "Ave Cesar") {
        if (line.includes("vs")) {
            let [firstHero, secondHero] = line.split(" vs ");
            if (mainObject[firstHero] && mainObject[secondHero]) {
                for (let firstHeroPoints of Object.entries(mainObject[firstHero])) {
                    for (let secondHeroPoints of Object.entries(mainObject[secondHero])) {
                        if (firstHeroPoints[0] === secondHeroPoints[0]) {
                            if (firstHeroPoints[1] > secondHeroPoints[1]) {
                                delete mainObject[secondHero];
                            } else if (firstHeroPoints[1] < secondHeroPoints[1]) {
                                delete mainObject[firstHero];
                            }
                        }
                    }
                }
            }
        } else {
            let [gladiator, technique, skill] = line.split(" -> ");
            skill = Number(skill);
            if (!mainObject[gladiator]) {
                mainObject[gladiator] = {};
                mainObject[gladiator][technique] = skill;
            } else {
                if (mainObject[gladiator].skill < skill) {
                    mainObject[gladiator].skill = skill;
                } else if (!mainObject[gladiator][technique]) {
                    mainObject[gladiator][technique] = skill;
                }
            }
        }
        line = input.shift();
    }
    let mainEntries = Object.entries(mainObject);
    console.log(mainEntries);
    console.log(mainEntries[1]);
    console.log(mainEntries[1][1]);
    let entries2 = Object.entries(mainEntries[1][1]);
    console.log(entries2[1][1]);


    //   console.log(mainObject);
}
// solve([
//   "Peter -> BattleCry -> 400",
//   "Alex -> PowerPunch -> 300",
//   "Stefan -> Duck -> 200",
//   "Stefan -> Tiger -> 250",
//   "Ave Cesar",
// ]);
solve([
    "Peter -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Gladius -> Heal -> 200",
    "Gladius -> Support -> 250",
    "Gladius -> Shield -> 250",
    "Peter vs Gladius",
    "Gladius vs Julius",
    "Gladius vs Maximilian",
    "Ave Cesar",
]);