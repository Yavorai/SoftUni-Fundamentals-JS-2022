function sortNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    const end = numbers.length;
    const newArray = [];

    for (let i = 1; i < end; i+= 2) {
        const last = numbers.pop();
        numbers.splice(i, 0, last);
    }

    return numbers;
}

//================================================================
function solve(arr) {
    let result = [];
    let sorted = arr.sort((a, b) => a - b);

    while (sorted.length > 0) {
        result.push(sorted.shift());
        result.push(sorted.pop());
    }
    return result;
}
//===================================
function solve(arr) {

    let result = arr.sort((a, b) => a - b)
        .reduce((acc) => {
            while (arr.length) {
                acc.push(arr.shift());
                if (arr.lengh > 0) {
                    acc.push(arr.pop());
                }
            }
            return acc;
        }, []);
    return result;
}
//===============================
function solve(input){
    input.sort((a,b)=> a- b);
    let result = [];
    while (input.length) {
        result.push(input.shift());
        if (input.length) {
            result.push(input.pop());
        }
    }
    return result;
}