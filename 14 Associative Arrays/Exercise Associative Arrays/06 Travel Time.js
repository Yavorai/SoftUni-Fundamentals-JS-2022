function demo(input){
    let destinations = {}

    //fill destinations
    for(let element of input){
        let [country, town, cost] = element.split(" > ")
        // country dont exist
        if(!Object.keys(destinations).includes(country)){
            destinations[country] = {}
        }
        // country  exist
        // town does not exist
        if(!Object.keys(destinations[country]).includes(town)){
            destinations[country][town] = Number(cost)
        }
        // town exist
        if(Number(cost) < destinations[country][town]){
            destinations[country][town] = Number(cost)
        }
    }
    let sorted = Object.entries(destinations).sort((a,b) => a[0].localeCompare(b[0]) || 
    Object.values(a[1]).reduce((x,y) => x + y) - Object.values(b[1]).reduce((x,y) => x + y)
    )
    
    for(let [country, towns] of sorted){
        let townsAsEntries = Object.entries(towns).map(x => `${x[0]} -> ${x[1]}`)
        console.log(`${country} -> ${townsAsEntries.join(" ")}`);
    }
}
demo([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])

    /*
    function solve(arr) {
    let countries = {};
    for (let el of arr) {
        let currentEl = el.split(" > ");
        if (countries.hasOwnProperty(currentEl[0])) {
            if (countries[currentEl[0]].hasOwnProperty(currentEl[1])) {
                if (countries[currentEl[0]][currentEl[1]] > currentEl[2]) {
                    countries[currentEl[0]][currentEl[1]] = currentEl[2];
                }
            } else {
                countries[currentEl[0]][currentEl[1]] = {};
                countries[currentEl[0]][currentEl[1]] = currentEl[2];
            }
        } else {
            countries[currentEl[0]] = {};
            countries[currentEl[0]][currentEl[1]] = currentEl[2];
        }
    }
    let countriesEntries = Object.entries(countries);
    let sortedCountries = countriesEntries.sort((a, b) =>
        a[0].localeCompare(b[0])
    );
    for (let countries of sortedCountries) {
        let townEntries = Object.entries(countries[1]);
        let sortedTowns = townEntries.sort((a, b) => Number(a[1]) - Number(b[1]));
        let townsToString = sortedTowns.map((el) => {
            return el.join(" -> ");
        });
        let towns = townsToString.join(" ");
        console.log(`${countries[0]} -> ${towns}`);
    }
}
    */ 

function solve(input) {
    let countries = {};
    // държавата е key , града е value
    for (let row of input) {
        let currentRow = row.split(" > ");
        let country = currentRow[0];
        let city = currentRow[1];
        let price = Number(currentRow[2]);

        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
        }
        if (!countries[country].hasOwnProperty(city)) {
            countries[country][city] = price;
        }
        if (countries[country][city] > price) {
            // връща град
            countries[country][city] = price;
        }
    }
    let keys = Object.keys(countries);
    keys.sort((a, b) => a.localeCompare(b)); // ако има {} е какво връша slaga se ретърн !!!! ако няма не връща нищи и не трябват скоби
    for (let item of keys) {
        let sortedCities = Object.entries(countries[item]); // item = key тук
        sortedCities.sort((a, b) => a[1] - b[1]);
        let result = [];
        for (let city of sortedCities) {
            result.push(city.join(" -> "));
        }
        console.log(`${item} -> ${result.join(" ")}`);
    }
}