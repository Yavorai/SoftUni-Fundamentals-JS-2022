function demo(arr){
    arr.sort((a,b) => {
        let firstCriteria = a.length - b.length
        let secondCriteria = a.localeCompare(b)
        return firstCriteria || secondCriteria
    })
    console.log(arr.join("\n"));
}
demo(["alpha", "beta", "gamma"])
console.log("--------------");
demo(["Isacc", "Theodor", "Jack", "Harrison", "George"])