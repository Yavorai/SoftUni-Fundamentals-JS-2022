function demo(input){
    // second way
    let commandParsers = {
        "CastSpell": castSpell,
        "Recharge": recharge,
        "Heal": heal,
        "TakeDamage": takeDamage,
    }

    let heroes = {}
    let n = Number(input.shift())
    input.splice(0,n).forEach(line => {
        let [heroName, hp, mp] = line.split(" ")
        hp = Number(hp)
        mp = Number(mp)

        heroes[heroName] = {hp,mp}
    })

    input.forEach(line => {
        let [command, ...tokens] = line.split(" - ") // спред операторра ще набута останалите елементи в един масив
        let output; // без това за second way
        if(command !== "End"){
            if(command === "CastSpell"){
                output = castSpell(heroes, ...tokens)
            }else if(command === "Recharge"){
                output = recharge(heroes, ...tokens)
            }else if(command === "Heal"){
                output = heal(heroes, ...tokens)
            }else if(command === "TakeDamage"){
                output = takeDamage(heroes, ...tokens)
            }
            console.log(output);

            // second way
            let func = commandParsers[command]
            console.log(func(heroes,...tokens));
        }
        
    })
    let sorted = Object.entries(heroes).sort(compareHeroes)

    for(let [heroName, heroInfo] of sorted){
        let {hp,mp} = heroInfo

        console.log(heroName);
        console.log(`HP: ${hp}`);
        console.log(`MP: ${mp}`);
    }

    function compareHeroes(a,b){
        let [aName, aInfo] = a
        let [bName, bInfo] = b

        let byHealthDescending = bInfo.hp - aInfo.hp
        if(byHealthDescending === 0){ // 1 0 -1
            return aName.localeCompare(bName)
        }
        return byHealthDescending
    }

    function castSpell(heroes, heroName, mpNeeded, spellName){ // референцията на обекта е хубаво да се подаде за не я взима отгоре
        mpNeeded = Number(mpNeeded)
        const hero = heroes[heroName]

        if(hero.mp >= mpNeeded){
            hero.mp -= mpNeeded
            return `${heroName} has successfully cast ${spellName} and now has ${hero.mp} MP!`
        }
        // няма нужда от елс зашото ретурн ще спре изпълнението ако проверката е спазена
        return `${heroName} does not have enough MP to cast ${spellName}!`
    }

    function takeDamage(heroes, heroName, damage, attacker){
        damage = Number(damage)
        const hero = heroes[heroName]
        hero.hp -= damage

        if(hero.hp > 0){
            return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`
        }
        delete heroes[heroName]
        return `${heroName} has been killed by ${attacker}!`
    }

    function recharge(heroes,heroName,amount){
        amount = Number(amount)
        let hero = heroes[heroName]
        let oldValue = hero.mp
        hero.mp = Math.min(200, hero.mp + amount) // трик който спестява една иф проверка - взима винаги по ниската стойност

        return `${heroName} recharge for ${hero.mp - oldValue} MP!`

    }

    function heal(heroes, heroName, amount){
        amount = Number(amount)
        let hero = heroes[heroName]
        let oldValue = hero.hp
        hero.hp = Math.min(100, hero.hp + amount)

        return `${heroName} healed for ${hero.hp - oldValue} HP!`
    }
}
demo([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ])
  console.log("------------------");
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