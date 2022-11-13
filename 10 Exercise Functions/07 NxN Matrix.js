// function demo(number){
//   for(let i = 0; i < number; i++){
//     let row = ""
//     for(let j = 0; j < number; j++){
//       row += `${number} `
//     }
//     console.log(row);
//   }
// }
// demo(3)
// demo(5)

// //========================

// function matrix(n) {
//     let string ="";
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         string+= `${n} `;
//       }
//       string+= "\n";
//     }
//     return string;
//   }
//   console.log(matrix(2));

  //==========================

  function demo(number){
    function constructRow (number){
      let row = ""

      for(let i = 0; i < number; i++){
        row += `${number} `
      }
      return row
    }
    for(let j = 0; j<number; j++){
      console.log(constructRow(number));
    }
  }
  demo(3)
  demo(5)