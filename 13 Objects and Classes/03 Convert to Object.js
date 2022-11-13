function demo(jString){
    let obj = JSON.parse(jString)

    for(const [key,value] of Object.entries(obj)){
        console.log(`${key}: ${value}`);
    }
}
demo('{"name": "George", "age": 40, "town": "Sofia"}')