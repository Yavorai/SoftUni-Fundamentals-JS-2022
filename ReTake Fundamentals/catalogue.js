function catalogue(inputArr) {
    let indx = 0;
    let catalogueArr = inputArr
        .sort((a, b) => {
            return a.localeCompare(b);
        })
        .map((el) => {
            return el.split(" : ").map((element) => {
                if (indx % 2 !== 0) {
                    element = Number(element);
                }
                indx++;
                return element;
            }, indx);
        });

    let catalogue = [];
    for (item of catalogueArr) {
        let article = {
            name: item[0],
            price: item[1],
        };
        catalogue.push(article);
    }

    let groupLetter = catalogue[0].name[0];
    let groupLetterCheck = "";

    for (let i = 0; i < catalogue.length; i++) {
        if (groupLetter !== groupLetterCheck) {
            console.log(groupLetter);
        }
        console.log(`  ${catalogue[i].name}: ${catalogue[i].price}`);
        if (catalogue[i + 1]) {
            groupLetter = catalogue[i + 1].name[0];
        } else {
            groupLetter = catalogue[i].name[0];
        }
        groupLetterCheck = catalogue[i].name[0];
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
    "T-Shirt : 10",
]);

catalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);