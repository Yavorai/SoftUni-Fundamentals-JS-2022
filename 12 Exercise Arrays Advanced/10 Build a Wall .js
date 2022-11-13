function buildWall(array) {

    let result = [];
  
    for (let i = 1; ; i++) {
      let crew = 0;
  
      array.forEach(h => {
        if (h + i <= 30) {
          crew++;
        }
      });
      
      if (crew == 0) {
        break;
      }
  
      result.push(crew * 195);
    }
  
    console.log(result.join(", "));
    console.log(`${result.reduce((a, b) => a + b, 0) * 1900} pesos`);
  
  }
  buildWall([21, 25, 28]);
  buildWall([17]);
  buildWall([17, 22, 17, 19, 17]);

//===============================

function buildAWall(walls) {
    walls.map(Number);
    let numberOfWalls = walls.length;
    let totalConcrete = 0;
    let final = []

    let index = 0;
    while (index !== -1) {
        index = walls.findIndex(x => x < 30);
        if (index !== -1) {
            let dailyUse = 0;
            for (let i = 0; i < walls.length; i++) {
                if (walls[i] < 30) {
                    dailyUse += 195;
                    walls[i] += 1
                }
            }
            totalConcrete += dailyUse
            final.push(dailyUse)
        }
    }
    let price = totalConcrete * 1900
    console.log(final.join(", "));
    console.log(`${price} pesos`);
}

buildAWall([30]);

// let parsedArr = arr.map(Number);
// let dailyConcrete = [];
// let totalConcrete = 0;
// let costs = 0;
// let crews = parsedArr.filter(len => len < 30).length;
// while (crews !== 0) {
//     let concreteByAllCrews = 0;
//     for (let i = 0; i < parsedArr.length; i++){
//         if (parsedArr[i] !== 30) {
//             parsedArr[i]++;
//             concreteByAllCrews += 195;
//             if (parsedArr[i] == 30) {
//                 crews--;
//             }
//         }
//     }
//     totalConcrete += concreteByAllCrews;
//     dailyConcrete.push(concreteByAllCrews);
// }
// costs = totalConcrete * 1900;
// console.log(dailyConcrete.join(", "));
// console.log(`${costs} pesos`);
