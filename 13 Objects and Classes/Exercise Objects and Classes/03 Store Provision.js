// function demo(currentStock, products) {
//     let store = []

//     for(let i = 0; i < currentStock.length - 1; i+=2){
//         let product = currentStock[i]
//         let qty = Number(currentStock[i + 1])

//         let productObj = {
//             currProduct: product,
//             currProductQuantity: qty,
//         }
//         store.push(productObj)
//     }

//     for(let i = 0; i < products.length - 1; i+=2){
//         let product = products[i]
//         let qty = Number(products[i + 1])

//         let productObj = {
//             product,
//             qty,
//         }

//         let indexOfProduct = store.findIndex(x => x.product === product)

//         if(indexOfProduct === -1){
//             // product does not exist
//             store.push(productObj)
//         }else{
//             //  product exist
//             store[indexOfProduct].currProductQuantity += qty
//         }
//     }
//     for (const product of store) {
//         console.log(`${product.product} -> ${product.currProductQuantity}`);
//       }

// }
// demo(
//   ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
//   ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
// );

//==================================

function demo(stock, newProducts) {
  let store = [];

  for (let i = 0; i < stock.length; i += 2) {
    let name = stock[i];
    let qty = Number(stock[i + 1]);

    let productObj = {
      name,
      qty,
    };
    store.push(productObj);
  }

  for (let j = 0; j < newProducts.length; j += 2) {
    let name = newProducts[j];
    let qty = Number(newProducts[j + 1]);

    let productObj = {
      name,
      qty,
    };

    let indexOfProduct = store.findIndex((item) => item.name === name);

    if (indexOfProduct === -1) {
      store.push(productObj);
    } else {
      store[indexOfProduct].qty += qty;
    }
  }
  for (const product of store) {
    console.log(`${product.name} -> ${product.qty}`);
  }
}
demo(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

//==============================

function storeProvision(stock, ordered) {
  let totalStock = [...stock,...ordered]
  let output = []
  let storage = {}

  storage = putDataInObj(totalStock)

  Object.entries(storage).forEach(([product,quantity]) => {
      output.push(`${product} -> ${quantity}`)
  })
  return output.join("\n")

  function putDataInObj(arr){
    let obj = []
    for(let i = 0; i < arr.length; i += 2){
        let product = arr[i]
        let qty = Number(arr[i + 1])

        if(!obj.hasOwnProperty(product)){
            obj[product] = qty
        }else{
            obj[product] += qty
        }
    }
    return obj
  }
}
console.log(
  storeProvision(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    [
      "Flour",
      "44",
      "Oil",
      "12",
      "Pasta",
      "7",
      "Tomatoes",
      "70",
      "Bananas",
      "30",
    ]
  )
);
