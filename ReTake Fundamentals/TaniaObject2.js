function demo(input) {

    for (let townInfo of input) {
        //let [town,latitude,longitude] = townInfo.split(" | ")
        let tokens = townInfo.split(" | ")
        let town = tokens[0]
        let latitude = Number(tokens[1]).toFixed(2)
        let longitude = Number(tokens[2]).toFixed(2)

        let townData = {
            town,
            latitude,
            longitude
        }
        console.log(townData);
    }
}
demo(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
])