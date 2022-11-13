// function demo(input){
//     let heroes = {}
//     let n = Number(input.shift())

//     input.splice(0,n).forEach(line => {
//       let [heroName, hp ,mp] = line.split(" ")
//       hp = Number(hp)
//       mp = Number(mp)

//       heroes[heroName] = {hp, mp}
//     })

//     input.forEach(line => {
//       let [command, ...tokens] = line.split(" - ")


//       let output;
//       if(command !== "End"){
//         if(command === "CastSpell"){
//           output = castSpell(heroes, ...tokens) // ползваме спред оператор понеже не знаем колко на брой са останалите елементи 
//         }else if(command === "Recharge"){
//           output = recharge(heroes,...tokens) 
//         }else if(command === "TakeDamage"){
//           output = takeDamage(heroes, ...tokens)
//         }else if(command === "Heal"){
//           output = heal(heroes, ...tokens)
//         }
//         console.log(output);
//       }
//     })

//     let sorted = Object.entries(heroes)
//     .sort((a,b) => compareHeroes)

//     for(let [heroName, heroInfo] of sorted){
//       let {hp, mp} = heroInfo // деструкторираме обект - трябва да се в къдрави ако е масив си е в []

//       console.log(heroName);
//       console.log(`  HP: ${hp}`);
//       console.log(`  MP: ${mp}`);
//     }

//     function compareHeroes(a,b) {
//       let [aName, aInfo] = a
//       let [bName, bInfo] = b

//       let byHealthDescending = bInfo.hp - aInfo.hp
//       if(byHealthDescending === 0){
//         return aName.localeCompare(bName)
//       }
//     }
    
//     function castSpell (heroes, heroName,mpNeeded, spellName){ // хубаво е да се подаде реферция към обекта за да не се ползва отгоре а референцията
//       mpNeeded = Number(mpNeeded)
//       const hero = heroes[heroName];

//       if(hero.mp >= mpNeeded){
//         hero.mp -= mpNeeded
//         return `${heroName} has successfully cast ${spellName} and now has ${hero.mp} MP!`
//       }
//       return `${heroName} does not have enough MP to cast ${spellName}!`
//     }

//     function takeDamage(heroes, heroName, damage, attacker) {
//       damage = Number(damage)
//       const hero = heroes[heroName]
//       hero.hp -= damage
//       if(hero.hp > 0){
//         return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`
//       }
//       delete heroes[heroName]
//       return `${heroName} has been killed by ${attacker}!`
//     }

//     function recharge(heroes, heroName,amount){
//       amount = Number(amount)
//       let hero = heroes[heroName]
//       let oldValue = hero.mp
//       hero.mp = Math.min(200, hero.mp + amount) // спестява се if проверка - така ще вземе минималното ез да излиза над 200
//       return `${heroName} recharged for ${hero.mp - oldValue} MP!`
//     }

//     function heal(heroes, heroName, amount){
//       amount = Number(amount)
//       let hero = heroes[heroName]
//       let oldValue = hero.hp
//       hero.hp = Math.min(100, hero.hp + amount)
//       return `${heroName} healed for ${hero.hp - oldValue} HP!`
//     }
// }
// demo([
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
//   ])
//   console.log("=====================");
//   demo([
//     '4',
//     'Adela 90 150',
//     'SirMullich 70 40',
//     'Ivor 1 111',
//     'Tyris 94 61',
//     'Heal - SirMullich - 50',
//     'Recharge - Adela - 100',
//     'CastSpell - Tyris - 1000 - Fireball',
//     'TakeDamage - Tyris - 99 - Fireball',
//     'TakeDamage - Ivor - 3 - Mosquito',
//     'End'
//   ])

  //================================================================
  // var 2


  function demo(input){
    let heroes = {}
    let n = Number(input.shift())

    input.splice(0,n).forEach(line => {
      let [heroName, hp ,mp] = line.split(" ")
      hp = Number(hp)
      mp = Number(mp)

      heroes[heroName] = {hp, mp}
    })


    let commandParser = {
      "CastSpell": castSpell,
      "Recharge":recharge,
      "TakeDamage":takeDamage,
      "Heal":heal,
    }

    input.forEach(line => {
      let [command, ...tokens] = line.split(" - ")
      if(command !== "End"){
        let funk = commandParser[command]
        console.log(funk(heroes,...tokens));
      }
    })

    let sorted = Object.entries(heroes)
    .sort((a,b) => compareHeroes)

    for(let [heroName, heroInfo] of sorted){
      let {hp, mp} = heroInfo // деструкторираме обект - трябва да се в къдрави ако е масив си е в []

      console.log(heroName);
      console.log(`  HP: ${hp}`);
      console.log(`  MP: ${mp}`);
    }

    function compareHeroes(a,b) {
      let [aName, aInfo] = a
      let [bName, bInfo] = b

      let byHealthDescending = bInfo.hp - aInfo.hp
      if(byHealthDescending === 0){
        return aName.localeCompare(bName)
      }
    }
    
    function castSpell (heroes, heroName,mpNeeded, spellName){ // хубаво е да се подаде реферция към обекта за да не се ползва отгоре а референцията
      mpNeeded = Number(mpNeeded)
      const hero = heroes[heroName];

      if(hero.mp >= mpNeeded){
        hero.mp -= mpNeeded
        return `${heroName} has successfully cast ${spellName} and now has ${hero.mp} MP!`
      }
      return `${heroName} does not have enough MP to cast ${spellName}!`
    }

    function takeDamage(heroes, heroName, damage, attacker) {
      damage = Number(damage)
      const hero = heroes[heroName]
      hero.hp -= damage
      if(hero.hp > 0){
        return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`
      }
      delete heroes[heroName]
      return `${heroName} has been killed by ${attacker}!`
    }

    function recharge(heroes, heroName,amount){
      amount = Number(amount)
      let hero = heroes[heroName]
      let oldValue = hero.mp
      hero.mp = Math.min(200, hero.mp + amount) // спестява се if проверка - така ще вземе минималното ез да излиза над 200
      return `${heroName} recharged for ${hero.mp - oldValue} MP!`
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
  console.log("=====================");
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