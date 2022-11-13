function demo(input) {
    let productCount = Number(input.shift());
    let pattern = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/

    while (productCount > 0) {
        let barcode = input.shift()
        let match = pattern.exec(barcode)

        if (match) {
            let productGroup = ""
            let product = match.groups.product
            for (let ch of product) {
                let isNumber = Number(ch)
                if (isNumber * 1 === isNumber) { // NaN или стринг АКО ИМА ЧИСЛО ГО ДОБАВЯМЕ В ГРУПАТА
                    productGroup += ch
                }
            }
            if (productGroup === "") {
                productGroup = "00"
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
        productCount--
    }
}
//demo(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##'])

demo([
        '6',
        '@###Val1d1teM@###',
        '@#ValidIteM@#',
        '##InvaliDiteM##',
        '@InvalidIteM@',
        '@#Invalid_IteM@#',
        '@#ValiditeM@#'
    ])
    //============================
function solve(input) { //100/100
    const barcodePattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    const digitPattern = /\d/;
    input.shift();

    input.forEach(el => {
        if (barcodePattern.test(el)) {
            const group = [...el]
                .filter(char => digitPattern.test(char))
                .join('');
            group.length > 0 ?
                console.log(`Product group: ${group}`) :
                console.log(`Product group: 00`);
        } else {
            console.log('Invalid barcode');
        }
    });
}