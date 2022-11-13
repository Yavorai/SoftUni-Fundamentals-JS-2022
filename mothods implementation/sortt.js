function demo() {
    let arr = [5, 10, 20, 15];
    let sortedArr = arr.sort((a, b) => {
        return b - a; // от малко към голямо. това е синтаксиса. подават се два параметъра зашото то сравнява два по два bubble sort like
        //return a.length - b.length // ако са стрингове
        //return a.localeCompare(b) по аски код по азбучен ред ?
    });
    console.log(sortedArr);
}
demo();