function demo(input){
    // parse first part of input, creating initial plant catalog
    //-- determine how many elements of the input represent the catalog
    //-- for each el of the input create new catalog entry of update existing entry
    // parse second part, updating catalog according to commands
    //-- for each remaining input el until exhibition is reached perform listed command
    //-- parse input to determine command
    //--perform given command with given parameters

    // sort catalog
    //-- convert to array
    //-- pass compare func into sorting operation
    // -- return difference between plants rarity
    // -- if rarity is same - by average rating

    let actions = {
        "Rate": rate, // не са със скоби защото ще се изпълнят
        "Update": update, // те не връщат нищо
        "Reset": reset,
    }

    let catalog = {}
    let n = Number(input.shift())

    for(let i = 0; i < n; i++){
        let [name,rarity] = input.shift().split("<->")

        catalog[name] = {
            rarity: Number(rarity),
            ratings: [],
            avgRating: 0,
        }
    }

    while(input[0] != "Exhibition"){
        let [command, params] = input.shift().split(": ")
        let action = actions[command]
        action(params)
    }

    let sorted = Object.entries(catalog).sort(comparePlants)

    console.log("Plants for the exhibition:");
    for (let [name,plant] of sorted){
        console.log(`-${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`);
    }
    function comparePlants(a,b){
        let rarityA = a[1].rarity      
        let rarityB = b[1].rarity
        let raitingA = a[1].avgRating
        let raitingB = b[1].avgRating
        return  (rarityB - rarityA) || (raitingB - raitingA)
    }

    function rate(line){
        let [name,rating] = line.split(" - ")
        if(catalog[name] != undefined){
            let plant = catalog[name]
            plant.ratings.push(Number(rating))

            let total = 0
            for(let rating of plant.ratings){
                total += rating
            }
            plant.avgRating = total / plant.ratings.length

        }else{
            console.log("error");
        }
    }

    function update(line){
        let [name,rarity] = line.split(" - ")
        if(catalog[name] != undefined){ // дали съществува
            let plant = catalog[name]
            plant.rarity = Number(rarity)
        }else{
            console.log("error");
        }
    }

    function reset(name){
        if(catalog[name] != undefined){
            let plant = catalog[name] //вадим го в променлива защото ще има повече от една операция с него
            plant.ratings.length = 0 // най краткия начин за нулиране 
            plant.avgRating = 0

        }else{
            console.log("error");
        }
    }
}
demo([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
  ]
  )
// console.log("--------------------------");
//   demo([
//     '2',
//     'Candelabra<->10',
//     'Oahu<->10',
//     'Rate: Oahu - 7',
//     'Rate: Candelabra - 6',
//     'Exhibition'
//   ])