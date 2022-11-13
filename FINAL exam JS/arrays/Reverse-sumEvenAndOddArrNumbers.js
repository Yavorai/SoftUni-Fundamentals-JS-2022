function demo(numbers){
    for(let i = 0; i < numbers.length; i++){ // просто ги обръша в число, същата позиция
        numbers[i] = Number(numbers[i]);
    }
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let current = numbers[i];
        if(current % 2 == 0){
            sum += current;
        }
    }
    console.log(sum);
}
demo(["1","2","3","4","5","6"])