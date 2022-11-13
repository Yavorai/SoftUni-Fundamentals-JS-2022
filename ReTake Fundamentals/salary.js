function salary(inp) {
    let n = Number(inp[0]);
    let sal = Number(inp[1])
    let c = (inp)
    let count = 0;
    let result = 0;
    for (let i = 1; i < c.length; i++) {
 
        switch (c[i]) {
            case 'Facebook': count += 150; break;
            case 'Instagram': count += 100; break;
            case 'Reddit': count += 50; break;
            default: count+= 0; break;
            
        }
    } result = sal - count;
    if (result <= 0) {
        console.log('You have lost your salary.');
    } else {
        console.log(result);
    }
}