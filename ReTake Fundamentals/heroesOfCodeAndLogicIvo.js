function demo(input) {
    let herosCount = Number(input.shift());
    let heros = {}

    while (herosCount > 0) {
        let line = input.shift().split(" ");

        let name = line[0];
        let hp = Number(line[1]);
        let mp = Number(line[2]);

        if (hp > 100) {
            hp = 100;
        }
        if (mp > 200) {
            mp = 200;
        }
        heros[name] = [hp, mp] // 0 , 1
        herosCount--
    }

    let [command, hero, amount, name] = input.shift().split(" - ");
    while (command !== "End") {
        switch (command) {
            case "CastSpell":
                if (heros.hasOwnProperty(hero)) {
                    let currHeroArr = heros[hero]
                    let currMP = currHeroArr[1]
                    amount = Number(amount)
                    if (currMP >= amount) {
                        currMP -= amount
                        currHeroArr[1] = currMP
                        heros[hero] = currHeroArr
                        console.log(`${hero} has successfully cast ${name} and now has ${currMP} MP!`);
                    } else {
                        console.log(`${hero} does not have enough MP to cast ${name}!`);
                    }
                }
                break;
            case "TakeDamage":
                if (heros.hasOwnProperty(hero)) {
                    let currHeroArr = heros[hero]
                    let currHP = currHeroArr[0]
                    amount = Number(amount)
                    currHP -= amount

                    if (currHP > 0) {
                        currHeroArr[0] = currHP
                        heros[hero] = currHeroArr
                        console.log(`${hero} was hit for ${amount} HP by ${name} and now has ${currHP} HP left!`);
                    } else {
                        delete heros[hero]
                        console.log(`${hero} has been killed by ${name}!`);
                    }
                }
                break;
            case "Recharge":
                if (heros.hasOwnProperty(hero)) {
                    let currentHeroArr = heros[hero]
                    let currMP = currentHeroArr[1] // ендо идва от този масив heros[name] = [hp, mp]
                    let needMP = 200 - currMP
                    amount = Number(amount)
                    currMP += amount

                    if (currMP > 200) {
                        currMP = 200
                        amount = needMP
                    }
                    currentHeroArr[1] = currMP
                    heros[hero] = currentHeroArr
                    console.log(`${hero} recharged for ${amount} MP!`);
                }
                break;
            case "Heal":
                if (heros.hasOwnProperty(hero)) {
                    let currHeroArr = heros[hero]
                    let currHP = currHeroArr[0]
                    let needHP = 100 - currHP
                    amount = Number(amount)
                    currHP += amount

                    if (currHP > 100) {
                        currHP = 100
                        amount = needHP
                    }
                    currHeroArr[0] = currHP
                    heros[hero] = currHeroArr
                    console.log(`${hero} healed for ${amount} HP!`);
                }
                break;
        }
        [command, hero, amount, name] = input.shift().split(" - ")
    }

    let herosArray = Object.entries(heros)
    let sortedHerosArray = herosArray.sort(sortHeroes)

    function sortHeroes(heroA, heroB) {
        let heroNameA = heroA[0]
        let heroNameB = heroB[0]
        let heroPointsA = heroA[1] // arr [ 100, 40 ]
        let heroPointsB = heroB[1]
        let heroHPA = heroPointsA[0] // първия елемент от тоя масив с hp and mp
        let heroHPB = heroPointsB[0]

        if (heroHPA === heroHPB) {
            return heroNameA.localeCompare(heroNameB)
        } else {
            return heroHPB - heroHPA
        }
    }
    let sortedHeroes = Object.fromEntries(sortedHerosArray)

    for (let hero in sortedHeroes) {
        console.log(hero);
        let heroPoints = sortedHeroes[hero] // масива с кръв и мана
        console.log(`  HP: ${heroPoints[0]}`);
        console.log(`  MP: ${heroPoints[1]}`);
    }

}
// demo([
//         '2',
//         'Solmyr 85 120',
//         'Kyrre 99 50',
//         'Heal - Solmyr - 10',
//         'Recharge - Solmyr - 50',
//         'TakeDamage - Kyrre - 66 - Orc',
//         'CastSpell - Kyrre - 15 - ViewEarth',
//         'End'
//     ])
demo([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])


//====================================================================

// function demo(input) {
//     let heroesCount = Number(input.shift());
//     let heroes = {};

//     while (heroesCount > 0) {
//         let line = input.shift().split(" ");

//         let heroName = line[0];
//         let hp = Number(line[1]);
//         let mp = Number(line[2]);
//         if (hp > 100) {
//             hp = 100;
//         }
//         if (mp > 200) {
//             mp = 200;
//         }
//         heroes[heroName] = [hp, mp];
//         heroesCount--;
//     }

//     let [command, hero, amount, name] = input.shift().split(" - ");
//     while (command !== "End") {
//         switch (command) {
//             case "CastSpell":
//                 if (heroes.hasOwnProperty(hero)) {
//                     let currentHeroArr = heroes[hero];
//                     let currentMP = currentHeroArr[1]
//                     amount = Number(amount)
//                     if (currentMP >= amount) {
//                         currentMP -= amount;
//                         currentHeroArr[1] = currentMP;
//                         heroes[hero] = currentHeroArr
//                         console.log(`${hero} has successfully cast ${name} and now has ${currentMP} MP!`);
//                     } else {
//                         console.log(`${hero} does not have enough MP to cast ${name}!`);
//                     }
//                 }
//                 break;
//             case "TakeDamage":
//                 if (heroes.hasOwnProperty(hero)) {
//                     let currentHeroArr = heroes[hero];
//                     let currentHP = currentHeroArr[0]
//                     amount = Number(amount)
//                     currentHP -= amount

//                     if (currentHP > 0) {
//                         currentHeroArr[0] = currentHP
//                         heroes[hero] = currentHeroArr
//                         console.log(`${hero} was hit for ${amount} HP by ${name} and now has ${currentHP} HP left!`);
//                     } else {
//                         delete heroes[hero]
//                         console.log(`${hero} has been killed by ${name}!`);
//                     }
//                 }
//                 break;
//             case "Recharge":
//                 if (heroes.hasOwnProperty(hero)) {
//                     let currentHeroArr = heroes[hero];
//                     let currentMP = currentHeroArr[1]
//                     let needMP = 200 - currentMP
//                     amount = Number(amount)
//                     currentMP += amount

//                     if (currentMP > 200) {
//                         currentMP = 200
//                         amount = needMP
//                     }
//                     currentHeroArr[1] = currentMP
//                     heroes[hero] = currentHeroArr
//                     console.log(`${hero} recharged for ${amount} MP!`);
//                 }
//                 break;
//             case "Heal":
//                 if (heroes.hasOwnProperty(hero)) {
//                     let currentHeroArr = heroes[hero];
//                     let currentHP = currentHeroArr[0]
//                     let needHP = 100 - currentHP
//                     amount = Number(amount)
//                     currentHP += amount
//                     if (currentHP > 100) {
//                         currentHP = 100
//                         amount = needHP
//                     }
//                     currentHeroArr[0] = currentHP
//                     heroes[hero] = currentHeroArr
//                     console.log(`${hero} healed for ${amount} HP!`);
//                 }
//                 break;
//         }
//         [command, hero, amount, name] = input.shift().split(" - ")
//     }

//     let heroesArray = Object.entries(heroes)
//     let sortedHeroesArray = heroesArray.sort(sortHeroes)

//     function sortHeroes(heroA, heroB) {
//         let heroNameA = heroA[0]
//         let heroNameB = heroB[0]
//         let heroPointsA = heroA[1]
//         let heroPointsB = heroB[1]
//         let heroHPA = heroPointsA[0]
//         let heroHPB = heroPointsB[0]

//         if (heroHPA === heroHPB) {
//             return heroNameA.localeCompare(heroNameB)
//         } else {
//             return heroHPB - heroHPA
//         }
//     }
//     let sortedHeroes = Object.fromEntries(sortedHeroesArray)

//     for (let sortReady in sortedHeroes) {
//         console.log(sortReady);
//         let heroPoints = sortedHeroes[sortReady]
//         console.log(`  HP: ${heroPoints[0]}`);
//         console.log(`  MP: ${heroPoints[1]}`);
//     }
// }