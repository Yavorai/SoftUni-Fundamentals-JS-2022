function demo(arr){
    class cat {
        constructor(name, age){
            this.name = name;
            this.age = age
        }
        sayMeow(){
            return `${this.name}, age ${this.age} says Meow`
        }
    }
    for(value of arr){
        let [name, age] = value.split(" ")
        let catObj = new cat(name,age)
        console.log(catObj.sayMeow());
    }
}
demo(['Mellow 2', 'Tom 5'])

//======================

function demo(arr){
    let cats = []

    class Cat {
        constructor(catName, age){
            this.catName = catName;
            this.age = age;

        }
        talk(){
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }

    for(let i = 0; i < arr.length; i++){
        let [name,age] = arr[i].split(" ")
        cats.push(new Cat(name, age))
    }
    for(const key of cats){
        key.talk()
    }
}
demo(['Mellow 2', 'Tom 5'])