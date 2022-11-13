function demo(input){

let operations = {
    TakeOdd, // начина на изписване се определя от това как идват от входа 
    Cut,    // трябва да се същият като на входа
    Substitute,
}
let rawPass = input.shift()

while(input[0] !== "Done"){
    let tokens = input.shift().split(" ")
    let command = operations[tokens[0]]
    rawPass = command(rawPass, tokens[1], tokens[2])
}

function TakeOdd(text){
    let result = ""
    for(let i = 1; i < text.length; i+= 2){
        result += text[i]
    }
    console.log(result);
    return text
}

function Cut(text,start,count){
    start = Number(start)
    count = Number(count)
    let word = text.substring(start, start + count)
    let result = text.replace(word, "")
    console.log(result);
    return result
}

function Substitute(text,match,word){
    let result = text.split(match).join(word)
    if(result === text){
        console.log("Nothing to replace!");
    }else{
        console.log(result);
    }
    return result
}

}
demo([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ])
  console.log("-----------");
  demo([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
  ])