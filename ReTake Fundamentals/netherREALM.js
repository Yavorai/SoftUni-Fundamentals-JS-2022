function solve(text) {
    let demons = text.split(",")
    let allDemons = {}
    let patern = /[^*+\/\d\.-]/g;
    let powerPatern = /(-)?\d+(\.\d+)?/g
 
    for (let demon of demons) {
        demon = demon.trim()
        if (demon.indexOf(",") > -1 || demon.indexOf(" ") > -1) {
            continue;
        }
        let health = 0
        let power = 0
        let healthName = demon.match(patern)
        if(healthName === null){
            continue;
        }
        for (let el of healthName) {
            health += el.charCodeAt(0)
        }
        let powerArr = demon.match(powerPatern)
        if (powerArr !== null) {
            for (let el of powerArr) {
                power += Number(el)
            }
            for (let el of demon) {
                if (el === "*") {
                    power *= 2
                } else if (el === "/") {
                    power /= 2
                }
            }
        }
        if (!allDemons.hasOwnProperty(demon)) {
            allDemons[demon] = {
                health: health,
                damage: power
            }
        }
    }
 
 
    let sorted = Object.entries(allDemons).sort((a, b) => a[0].localeCompare(b[0]))
 
    for (let fighter of sorted) {
        let stat = fighter[1]
        console.log(`${fighter[0]} - ${stat.health} health, ${(stat.damage).toFixed(2)} damage`);
    }
}
solve("M3ph-0.5s-0.5t0.0**")
console.log("------------------------")
solve("M3ph1st0**, Azazel")
console.log("------------------------")
solve("Gos/ho")