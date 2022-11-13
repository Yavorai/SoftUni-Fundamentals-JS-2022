function demo(stock, products) {
    let store = []

    for (let i = 0; i < stock.length - 1; i += 2) { // length -1 за да няма гърмеж накрая
        let currProduct = stock[i]
        let currQuantity = Number(stock[i + 1])

        let objProduct = {
            currProduct,
            currQuantity,
        }

        store.push(objProduct)
    }

    for (let i = 0; i < products.length - 1; i += 2) {
        let currProduct = products[i]
        let currQuantity = Number(products[i + 1])

        let objProduct = {
            currProduct,
            currQuantity,
        }

        let indexOfProduct = store.findIndex(x => x.currProduct === currProduct)

        if (indexOfProduct === -1) {
            store.push(objProduct)
        } else {
            store[indexOfProduct].currQuantity += currQuantity
        }
    }
    //console.log(store);
    for (let line of store) {
        console.log(`${line.currProduct} -> ${line.currQuantity}`);
    }
}
demo([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
])