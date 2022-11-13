function demo(arr){
    let pairs = 0
    
    for(let row = 0; row < arr.length; row++){
        for(let col = 0; col < arr[0].length; col++){
            if(row + 1 < arr.length){
                if(arr[row][col] === arr[row+1][col]){
                    pairs++
                }
            }    
            if(col + 1 < arr[0].length){
                if(arr[row][col] === arr[row][col+1]){
                    pairs++
                }
            }
        }
    }
    console.log(pairs);
    }
    demo([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']])
    console.log("---------------");
    demo([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']])