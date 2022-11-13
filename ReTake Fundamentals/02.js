function solve(input) {
    let countries = {};
    for (let el of input) {
        let cur = el.split(" > ");

        let country = cur[0];

        let town = cur[1];

        let cost = cur[2];

        if (
            countries.hasOwnProperty(country) &&
            countries[country].hasOwnProperty(town)
        ) {
            countries[country][town].push(cost);
        } else {
            if (!countries.hasOwnProperty(country)) {
                countries[country] = {};
            }

            if (!countries[country].hasOwnProperty(town)) {
                countries[country][town] = [];
            }

            countries[country][town].push(cost);
        }
    }

    // console.log(countries);

    const sorted = Object.keys(countries).sort((a, b) => a.localeCompare(b));

    for (let key of sorted) {
        let result = `${key} -> `;
        for (let value in countries[key]) {
            let smallest = Math.min(...countries[key][value]);
            result += `${value} -> ${smallest} `;
        }
        console.log(result);
    }
}