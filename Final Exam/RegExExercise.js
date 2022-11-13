function demo(input){
    // ако се ползват групи с exec          // и exec и match връща null

    let boughtFurniture = []
    let totalMoneySpend = 0

    for(let string of input){
        let pattern = />>(?<product>[A-Za-z]+)<<(?<price>[\d]+\.?[\d]*)!(?<quantity>[\d]+)/g.exec(string)
        if(pattern){
            boughtFurniture.push(pattern.groups.product);
            totalMoneySpend += Number(pattern.groups.price) * Number(pattern.groups.quantity)
        }
    }
    console.log("Bought furniture:");
    if(boughtFurniture.length > 0){
        console.log(boughtFurniture.join("\n"));
    }
    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
    

}
demo([
    ">>Sofa<<312.23!3",
">>TV<<300!5",
">Invalid<<!5",
"Purchase"
])