function demo(input) {

    let heroes = []

    for (let heroString of input) {

        let tokens = heroString.split(" / ")
        let name = tokens[0]
        let level = Number(tokens[1])
        let items = tokens[2].split(", ")

        let hereData = {
            name,
            level,
            items,
        }
        heroes.push(hereData)
    }

    let sortedHeroes = heroes.sort((a, b) => a.level - b.level)
    for (let hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.sort((a,b) => a.localeCompare(b)).join(', ')}`);
    }
}
demo([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])