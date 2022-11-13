function solve(input) {
    let collection = [];
 
    let processor = {
        'add': (text) => collection.push(text),
        'remove': (text) => {
            while (collection.includes(text)) {
                let index = collection.indexOf(text);
                collection.splice(index, 1);
            }
        },
        'print': () => console.log(collection.join(','))
    }
    for (let info of input) {
 
        let [command, text] = info.split(' ');
        processor[command](text)
 
    }
}