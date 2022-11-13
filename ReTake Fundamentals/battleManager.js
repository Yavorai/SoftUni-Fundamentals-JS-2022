function demo(input) {
    let person = {}
    let peopleCount = 0
    for (let line of input) {
        let [command, param1, param2, param3] = line.split(":")
        if (command === "Results") {
            break;
        }
        if (command === "Add") {
            let name = param1
            let health = Number(param2)
            let energy = Number(param3)
            if (!person.hasOwnProperty(name)) {
                peopleCount++
                person[name] = {
                    health: health,
                    energy: energy,
                }
            } else {
                person[name].health += health
            }
        } else if (command === "Attack") {
            let attackerName = param1
            let defenderName = param2
            let damage = Number(param3)
            if (person.hasOwnProperty(attackerName) && person.hasOwnProperty(defenderName)) {
                person[defenderName].health -= damage
                person[attackerName].energy -= 1
                if (person[defenderName].health <= 0) {
                    peopleCount--
                    delete person[defenderName]
                    console.log(`${defenderName} was disqualified!`);
                }
                if (person[attackerName].energy <= 0) {
                    peopleCount--
                    delete person[attackerName]
                    console.log(`${attackerName} was disqualified!`);
                }
            }
        } else if (command === "Delete") {
            let allOrNot = param1
            if (allOrNot === "All") {
                for (let toDelete in person) {
                    peopleCount--
                    delete person[toDelete]
                }
            } else {
                peopleCount--
                delete person[allOrNot]
            }
        }
    }
    let entries = Object.entries(person)
    let sorted = entries.sort(([nameA, itsValueObjA], [nameB, itsValueObjB]) => {
        let healthA = itsValueObjA.health
        let healthB = itsValueObjB.health
        return healthB - healthA || nameA.localeCompare(nameB)
    })
    console.log(`People count: ${peopleCount}`);
    for (let name of sorted) {
        console.log(`${name[0]} - ${name[1].health} - ${name[1].energy}`);
    }
}
// demo([
//     'Add:Mark:1000:5',
//     'Add:Clark:1000:2',
//     'Attack:Clark:Mark:500',
//     'Attack:Clark:Mark:800',
//     'Add:Charlie:4000:10',
//     'Results'
// ])

// demo([
//     'Add:Bonnie:3000:5',
//     'Add:Kent:10000:10',
//     'Add:Johny:4000:10',
//     'Attack:Johny:Bonnie:400',
//     'Add:Johny:3000:5',
//     'Add:Peter:7000:1',
//     'Delete:Kent',
//     'Results'
// ])

demo([
    'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Delete:All',
    'Add:Bonnie:3333:3',
    'Add:Aleks:1000:70',
    'Add:Tom:4000:1',
    'Results'
])