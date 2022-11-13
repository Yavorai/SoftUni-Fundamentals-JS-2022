function demo(text,word){
    let found = text.includes(word)
    while (found){
        text = text.replace(word, "*".repeat(word.length))
        found = text.includes(word)
    }
    console.log(text);
}
demo("A small sentence small with some words", "small")

// или
const tokens = text.split(word)
tokens.join("*".repeat(word.length))
// или
text.split(word).join("*".repeat(word.length))