function solve(input) {
    let arr = [];

    let countries = {};

    let arr2 = [];

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

    for (let key in countries) {
        let smallest = 0;

        label: for (let nes in countries[key]) {
            smallest = countries[key][nes].sort((a, b) => a - b)[0];

            for (let el of arr) {
                if (el.includes(key)) {
                    arr[arr[0].indexOf(key)][1].push([nes, smallest]);

                    arr2 = [];

                    continue label;
                }
            }

            arr2.push([nes, smallest]);

            arr.push([key, arr2]);

            arr2 = [];
        }
    }

    for (let el of arr) {
        el[1].sort((a, b) => a[1] - b[1]);

        el[1] = el[1].flat();
    }

    arr.sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of arr) {
        el = el.flat();

        let output = "";

        for (let el2 of el) {
            if (el[el.indexOf(el2) + 1] !== undefined) {
                if (Number(el2)) {
                    output += `${el2} `;
                } else {
                    output += `${el2} -> `;
                }
            } else {
                output += `${el2}`;
            }
        }

        console.log(output);
    }

    // console.log(arr);
}