function demo(input){
    input.shift()

    let pattern = /(@#{1,})([A-Z][A-Za-z\d]{4,}[A-Z])(@#{1,})/
    // let secondPattern = new RegExp("/(@#{1,})([A-Z][A-Za-z\d]{4,}[A-Z])(@#{1,})/g", "g")

    input.forEach(line => {
        if(pattern.test(line)){
            let tokens = pattern.exec(line)
            let barcode = tokens[2]

            let numbers = [...barcode]
            .filter(symbol => /\d/
            .test(symbol))
            .join("")

            let productGroup = numbers === "" ? "00" : numbers
            console.log(`Product group: ${productGroup}`);
        }else{
            console.log("Invalid barcode");
        }
    })
}
demo([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ])
console.log("-----------------------");
demo([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
  ])