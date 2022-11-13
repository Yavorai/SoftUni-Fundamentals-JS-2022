function demo(input){
    let companies = {}

    for(let line of input){
        let [company, id] = line.split(" -> ")
        if(!companies.hasOwnProperty(company)){
            companies[company] = []
        }
        companies[company].push(id)
    }
    let sorted = Object.entries(companies).sort((a,b) => a[0].localeCompare(b[0]))

    for(let [comp, id] of sorted){
        console.log(comp);
        let set = new Set(id)
        for(let num of set){
            console.log(`-- ${num}`);
        }
    }
}
demo([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])
console.log("----------------");
demo([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )