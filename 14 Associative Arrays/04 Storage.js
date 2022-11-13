function demo(arr){
    let map = new Map()

    for(let line of arr){
        let [product, qty] = line.split(" ")
        qty = Number(qty)

        if(!map.has(product)){
            map.set(product, qty)
        }else{
            let currentQty = map.get(product)
            let newQty = currentQty += qty
            map.set(product, newQty)
        }
    }
    for(let entry of map){
        console.log(`${entry[0]} -> ${entry[1]}`)
    }
}
demo(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])

//===============================

function demo(input) {
    // за MAP  само .set .get .has  с тези се работи
    let storage = new Map();
    input.forEach((line) => {
        let [item, quantity] = line.split(" ");
        quantity = Number(quantity);
        if (storage.has(item)) {
            // проверява дали вече го има
            let oldQuantity = storage.get(item);
            storage.set(item, oldQuantity + quantity);
        } else {
            storage.set(item, quantity);
        }
    });
    /*
          по лесен начин
              for(const key of storage.keys()){
                  console.log(`${key} -> ${storage.get(key)}`)
              }
          */
    for (let kvp of storage.entries()) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}