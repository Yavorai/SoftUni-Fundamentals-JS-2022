function demo(arr){
    let list = []

    arr.forEach(token => {
        let a = token.split(" ")
        let name = a[0]
        
        if(token.includes("not")){
            if(list.includes(name)){
                list.splice(list.indexOf(name),1)
            }else{
                console.log(`${name} is not in the list!`);
            }
        }else{
            if(list.includes(name)){
                console.log(`${name} is already in the list!`);
            }else{
                list.push(name)
            }
        }
    })
    list.forEach(element => {
        console.log(element);
    })
}
// demo(['Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!'])
console.log("----------------");
demo(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])