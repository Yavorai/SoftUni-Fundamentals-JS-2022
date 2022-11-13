function demo(arr){
    const person = {}
    let result = []

    for(let line of arr){
        let [name, contact] = line.split(" ")
        person[name] = contact
        result.push(person)
    }
    let data = Object.entries(person)

    for(let line of data){
        console.log(`${line[0]} -> ${line[1]}`);
    }
}
demo(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])


