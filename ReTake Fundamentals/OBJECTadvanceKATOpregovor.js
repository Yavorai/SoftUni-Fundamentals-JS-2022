function demo(input){
        let towns = {}

        for(let info of input){
            let infoArr = info.split(" <-> ")
            //let [town, pop] = info.split(" <-> ")
            let town = infoArr[0]
            let pop = Number(infoArr[1])

            if(!towns[town]){ // няма нужда да се сравнява с null или undefined 
                towns[town] = 0 // трябва да се гарантира първо че вътре има нула за да можем да събираме
                                // ако е undefined + 1 = NaN
            }
            towns[town] += pop
        }
        for( let town in towns){
            console.log(`${town} : ${towns[town]}`);
        }
}
demo([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "Montana <-> 20000",  // да се съберат pop
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
])