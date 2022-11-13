function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b))

   let products = new Map();
   for (let line of arr) {
       let data = line.split(' : ');
       let letter = data[0][0];
       if (!products.has(letter)) {
           products.set(letter, data);
       } else {
           products.set(letter, products.get(letter) + ',' + data);
       }
   }
   let myProducts = new Map([...products.entries()]);
   for (let [letter, items] of myProducts) {
       console.log(letter);
       if (items.constructor !== Array) {
           items = items.split(',');
       }
       for (let i = 0; i < items.length; i += 2) {
           console.log(`  ${items[i]}: ${items[i + 1]}`)
       }
   }
}

solve([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"
])

//--------------------------------

function catalogue(array) {
    let myObj = {}

    for (let item of array) {
        let [name, cost] = item.split(" : ");
        let lether = name[0]

        if (!myObj[lether]) {
            myObj[lether] = []
        }
        let exist = myObj[lether].indexOf(name)
        if (exist <= 0) {
            myObj[lether].push("  " + name + ": " + cost)
            myObj[lether].sort((a, b) => a.localeCompare(b))
        }
    }
    let ordered = Object.keys(myObj).sort().reduce(
        (obj, key) => {
            obj[key] = myObj[key];
            return obj;
        },
        {}
    );
    console.log(ordered);
    for (let [key, value] of Object.entries(ordered)) {
        console.log(key);

        console.log(value.join("\n"));
    }

}

catalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"
])