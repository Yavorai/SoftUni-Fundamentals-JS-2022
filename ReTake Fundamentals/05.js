function solve(arr) {
    const obj = {};
    arr.forEach((item) => {
        const [country, town, cost] = item.split(" > ");
        obj[country] = obj[country] ? obj[country] : {};
        obj[country][town] = obj[country][town] ? obj[country][town] : +cost;
        if (obj[country][town] > +cost) {
            obj[country][town] = +cost;
        }
    });
    const keys = Object.entries(obj).sort();
    keys.forEach((item) => {
        const currCountry = item[0];
        const value = Object.entries(item[1]);
        value.sort((a, b) => {
            return a[1] - b[1];
        });
        const curr = value.map((item) => {
            return item.join(" -> ");
        });
        console.log(`${currCountry} -> ${curr.join(" ")}`);
    });
}