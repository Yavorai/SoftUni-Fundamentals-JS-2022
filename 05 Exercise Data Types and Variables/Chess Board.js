function demo(n){
    let result = '<div class="chessboard">\n';
    let color = "black"
    for(let i = 0; i < n; i++){
        result += "  <div>\n"
        
        if(n%2===0){
            if(color === "black"){
                color = "white"
            }else{
                color = "black"
            }
        }    
        if(i === 0){
            color = "black"
        }
        
            for(let j = 0; j < n; j++){
                result += `    <span class="${color}"></span>\n`

                if(color === "black"){
                    color = "white"
                }else{
                    color = "black"
                }
            }
        result += "  </div>\n";
    }
    result += "  </div>\n";
    console.log(result);
}
demo(4)

//=============================================

function chessBoard(num) {

    console.log(`<div class="chessboard">`);

    for (let i = 1; i <= num; i++) {
        console.log(`  <div>`);

        for (let k = 1; k <= num; k++) {
            
            if ((i % 2 !== 0 && k % 2 !== 0) || (i % 2 === 0 && k % 2 === 0)) {
                console.log(`    <span class="black"></span>`);
            } else {
                console.log(`    <span class="white"></span>`);
            }
        }
        console.log(`  </div>`); 
    }
    console.log(`</div>`);
}
chessBoard(3)