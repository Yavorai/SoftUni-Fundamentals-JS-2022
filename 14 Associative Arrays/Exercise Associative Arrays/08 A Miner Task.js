function demo(input){
    let storage = {}

    for(let i = 0; i < input.length; i = i+2){
        let metal = input[i]
        let qty = Number(input[i+1])

        if(!storage.hasOwnProperty(metal)){
            storage[metal] = qty
        }else{
            storage[metal] += qty
        }
    }
    for(let key in storage){
        console.log(`${key} -> ${storage[key]}`);
    }
}
demo([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])
    console.log("-------------");
demo([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])

    //===========================

    function demo(input){
       let production = new Map()
       let arrLength = input.length
       for(let i = 0; i < arrLength;i+= 2){
           let metal = input[i]
           let qty = Number(input[i + 1])
        
           if(!production.has(metal)){
               production.set(metal, 0)
           }
           let newQty = production.get(metal)
           newQty += qty
           production.set(metal, newQty)
       }

       for(let item of production){
           console.log(`${item[0]} -> ${item[1]}`);
       }
    }
    demo([
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
        ])
        console.log("-------------");
    demo([
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
        ])