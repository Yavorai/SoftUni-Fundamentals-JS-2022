function demo(word, text){
//split text into tokens
//for each token
// if token equal word ( case-insensitive) print and end

let tokens = text.split(" ")
for(let token of tokens){
    if(word.toLocaleLowerCase() == token.toLocaleLowerCase()){
        return console.log(word);
    }
}
console.log(`${word} not found!`);
}
demo('javascript',
'JavaScript is the best programming language')
demo('python',
'JavaScript is the best programming language')