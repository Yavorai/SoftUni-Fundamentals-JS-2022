function demo(arr){
    let heroes = []

    for(let heroString of arr){
        let tokens = heroString.split(" / ")

        let name = tokens[0]
        let level = Number(tokens[1])
        let items = tokens[2].split(", ")

        let heroData = {
            name,
            level,
            items,
        }
        heroes.push(heroData)
    }
    let sortedHeroes = heroes.sort((a,b) => a.level - b.level)
    
    for(let hero of sortedHeroes){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.sort((a,b) => a.localeCompare(b)).join(", ")}`);
    }
}
demo([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ])

    //=========================================

    function inventory(input = []) {
        let data = {};
        for (const line of input) {
            let [name, level, items] = line.split(' / ');
            level = Number(level);
            items = items.split(', ');
            items.sort((a, b) => a.localeCompare(b));
            data[level] = {
                name: name,
                items: items
            };
        }
        return getOutput(data);
    
        function getOutput(obj = {}) {
            let output = [];
            let levels = Object.keys(obj);
            levels.sort((a, b) => a - b);
    
            for (const lvl of levels) {
                let key = obj[lvl];
                output.push(`Hero: ${key.name}`);
                output.push(`level => ${lvl}`);
                output.push(`items => ${key.items.join(', ')}`);
            }
            return output.join('\n');
        }
    }
    
    // console.log(inventory(
    //     [
    //         "Isacc / 25 / Apple, GravityGun",
    //         "Derek / 12 / BarrelVest, DestructionSword",
    //         "Hes / 1 / Desolator, Sentinel, Antara"
    //     ]
    // ));

    //==================================

    function inventoryObj(myHeroes) {
        let allHeroes = [];
    
        for (let hero of myHeroes) {
            let command = hero.split(" / ");
            let items = command[2].split(", ")
            items.sort((a,b) => a.localeCompare(b))
            allHeroes.push({
                Hero: command[0],
                level: Number(command[1]),
                items: items.join(", ")
            })
        }
        allHeroes.sort((a,b) => a.level - b.level)
        for (const heroes of allHeroes) {
            console.log(`Hero: ${heroes.Hero}`);
            console.log(`level => ${heroes.level}`);
            console.log(`items => ${heroes.items}`);
        }
    }
    
    inventoryObj([
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
        ]
        )


        //======================

        function inventory(array) {
            let heroes = [];
            for (const line of array) {
              let [name, lvl, items] = line.split(" / ");
              items = items
                .split(", ")
                .sort((a, b) => a.localeCompare(b))
                .join(", ");
          
              let hero = {
                name,
                lvl,
                items,
              }
              heroes.push(hero);
            }
            heroes
              .sort((a, b) => a.lvl - b.lvl)
              .forEach(h => {
                console.log(`Hero: ${h.name}`);
                console.log(`level => ${h.lvl}`);
                console.log(`items => ${h.items}`);
              })
          }
          inventory([
            "Isacc / 25 / Apple, GravityGun",
            "Derek / 12 / BarrelVest, DestructionSword",
            "Hes / 1 / Desolator, Sentinel, Antara"
          ])