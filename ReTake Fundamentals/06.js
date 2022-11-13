function solve(str) {
    let keyMaterials = ["shards", "fragments", "motes"];
    let legendaryItem = [
        "shards",
        "Shadowmourne",
        "fragments",
        "Valanyr",
        "motes",
        "Dragonwrath",
    ];

    let input = str.split(" ").map((el) => el.toLowerCase());
    let mainItem = {
        shards: 0,
        fragments: 0,
        motes: 0,
    };
    let otherItem = {};
    let inputLength = input.length;

    function addQuantity(obj, material, quantity) {
        let curentMaterial = Object.keys(obj);
        let curentQuantity = Number(obj[material]);
        return curentMaterial.includes(material) ?
            (obj[material] = curentQuantity + Number(quantity)) :
            (obj[material] = [quantity]);
    }

    let reachedItem = "";
    let enough = false;

    for (let i = 0; i < inputLength; i += 2) {
        let material = input[i + 1];
        let quantity = input[i];
        let isMain = keyMaterials.includes(material);

        if (isMain) {
            addQuantity(mainItem, material, quantity);
            Object.keys(mainItem).map((el) => {
                let curentQuantity = Number(mainItem[el]);
                if (curentQuantity >= 250) {
                    reachedItem = legendaryItem[legendaryItem.indexOf(el) + 1];
                    mainItem[el] -= 250;
                    enough = true;
                }
            });
        } else {
            addQuantity(otherItem, material, quantity);
        }

        if (enough) {
            break;
        }
    }
    print();

    function print() {
        console.log(`${reachedItem} obtained!`);
        Object.entries(mainItem)
            .sort((a, b) => {
                return b[1] - a[1] || a[0].localeCompare(b[0]);
            })
            .map((el) => {
                console.log(`${el[0]}: ${el[1]}`);
            });
        Object.entries(otherItem)
            .sort((a, b) => {
                return a[0].localeCompare(b[0]);
            })
            .map((el) => {
                console.log(`${el[0]}: ${el[1]}`);
            });
    }
}