function demo(input){
    let obj = {}
    let stringAll = input.split(" ")
    
    for(let string of stringAll){
        let lowerStr = string.toLowerCase()
        if(!Object.keys(obj).includes(lowerStr)){
            obj[lowerStr] = 0
        }
        obj[lowerStr] += 1
    }

    let resultString = []
    //let resultString = ""
    /*
    ако е със празен стринг
    console.log(resultString += `${key} `)
    */

    for(let [key, value] of Object.entries(obj)){
        if(value % 2 !== 0){
            resultString.push(key)
        }
    }
    console.log(resultString.join(" "));

}
demo('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')


//=========================================

function demo(input) {
    // всички елементи трябва да се приравнят в еднакви букви
    let words = input.toLowerCase().split(" ");
    //(12) ['java', 'c#', 'php', 'php', 'java', 'php', '3', 'c#', '3', '1', '5', 'c#']
    let map = new Map();
    for (let word of words) {
        let num = 0;
        if (map.has(word)) {
            num = map.get(word);
        }
        num++;
        map.set(word, num);
        // Map(6) {java => 2, c# => 3, php => 3, 3 => 2, 1 => 1, …}
    }
    let entries = Array.from(map);
    // console.log(entries[0]);  ->  (2) ['java', 2]
    let filteredElements = entries.filter((el) => {
        return el[1] % 2 !== 0; // да върне само нечетните
    });
    let result = [];
    for (let word of filteredElements) {
        result.push(word[0]);
    }
    console.log(result.join(" "));
}