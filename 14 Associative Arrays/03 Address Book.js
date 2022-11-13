// function demo(arr){
//     let data = {}
//     for(let line of arr){
//         let [name, address] = line.split(":")
//         data[name] = address
//     }
//     let peopleData = Object.entries(data).sort()
    
    
//     for(let line of peopleData){
//         console.log(`${line[0]} -> ${line[1]}`);
//     }
// }
// demo(['Tim:Doe Crossing',
// 'Bill:Nelson Place',
// 'Peter:Carlyle Ave',
// 'Bill:Ornery Rd'])

//=============================

function demo(input){
    let list = {}

    for(let line of input){
        let [name, address] = line.split(":")
            list[name] = address
    }
    let peopleData = Object.entries(list).sort((a, b) => {
        a = a[0];
        b = b[0];
        return a.localeCompare(b)
    })
    for(let line of peopleData){
        console.log(`${line[0]} -> ${line[1]}`)
    }
}
demo(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])